import React, { useState, useRef, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Button } from '../components/ui/button';
import { Camera, Edit, Upload, Save } from 'lucide-react';

const Profile = () => {
  const [profile, setProfile] = useState({
    username: '',
    address: '',
    profileImage: '', // this will be filename from backend OR preview URL if new
    file: null, // actual File object for new upload
  });

  const [editMode, setEditMode] = useState({
    address: false,
  });

  const fileInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const res = await fetch('https://kalamkar-exotics-backend.onrender.com/api/auth/getProfile', {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res.ok) {
          const data = await res.json();
          setProfile({
            username: data.username || '',
            address: data.address || '',
            profileImage: data.profileImage
              ? data.profileImage.replace('/profile-images/', '')
              : '',
            file: null,
          });
        }
      } catch (err) {
        console.error('Failed to fetch profile', err);
      }
    };
    fetchProfile();
  }, []);

  const handleInputChange = (field, value) => {
    setProfile((prev) => ({ ...prev, [field]: value }));
  };

  const toggleEditMode = (field) => {
    setEditMode((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    if (!token) return alert('Not authenticated');

    try {
      const formData = new FormData();
      formData.append('address', profile.address);

      if (profile.file) {
        formData.append('profileImage', profile.file);
      } else if (profile.profileImage) {
        // If no new file, send existing filename so backend knows
        formData.append('profileImage', profile.profileImage);
      }

      const res = await fetch('https://kalamkar-exotics-backend.onrender.com/api/auth/updateProfile', {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${token}`,
          // DO NOT set 'Content-Type' here for FormData, browser will set it
        },
        body: formData,
      });

      if (res.ok) {
        const updated = await res.json();
        setProfile({
          username: updated.username,
          address: updated.address || '',
          profileImage: updated.profileImage
            ? updated.profileImage.replace('/profile-images/', '')
            : '',
          file: null,
        });
        setEditMode({ address: false });
        alert('Profile updated');
      } else {
        alert('Failed to update profile');
      }
    } catch (err) {
      console.error('Update failed:', err);
      alert('Error updating profile');
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    // Create a preview URL for immediate feedback
    const previewUrl = URL.createObjectURL(file);

    setProfile((prev) => ({
      ...prev,
      profileImage: previewUrl,
      file: file,
    }));
  };

  const triggerFileInput = (inputRef) => {
    inputRef.current.click();
  };

  return (
    <Card className="w-full max-w-xl bg-green-50 border-green-200">
      <CardHeader className="bg-green-100 rounded-t-lg flex items-center">
        <CardTitle>User Profile</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6 p-6">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-64 h-64 rounded-full border-4 border-green-300 overflow-hidden flex items-center justify-center">
              {profile.profileImage ? (
                // If profileImage is a local preview URL (starts with blob:), use it directly
                <img
                  src={
                    profile.profileImage.startsWith('blob:')
                      ? profile.profileImage
                      : `https://kalamkar-exotics-backend.onrender.com/profile-images/${profile.profileImage}`
                  }
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-gray-400">No Image</div>
              )}
            </div>
            <div className="absolute bottom-0 right-0 flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => triggerFileInput(fileInputRef)}
                className="bg-white hover:bg-green-50"
              >
                <Upload className="h-5 w-5 text-green-600" />
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  className="hidden"
                />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => triggerFileInput(cameraInputRef)}
                className="bg-white hover:bg-green-50"
              >
                <Camera className="h-5 w-5 text-green-600" />
                <input
                  type="file"
                  ref={cameraInputRef}
                  onChange={handleImageChange}
                  accept="image/*"
                  capture="environment"
                  className="hidden"
                />
              </Button>
            </div>
          </div>

          <div className="w-full space-y-4">
            <div className="w-full">
              <Input
                value={profile.username}
                disabled
                placeholder="Username"
                className="flex-grow border-green-300 bg-gray-100 text-gray-600"
              />
            </div>
            <div className="w-full flex items-center space-x-2">
              <Textarea
                value={profile.address}
                onChange={(e) => handleInputChange('address', e.target.value)}
                disabled={!editMode.address}
                placeholder="Address"
                className="flex-grow border-green-300 focus:ring-green-500 min-h-[100px]"
              />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => toggleEditMode('address')}
              >
                <Edit className="h-5 w-5 text-green-600" />
              </Button>
            </div>

            <div className="w-full flex justify-end">
              <Button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                <Save className="mr-2 h-5 w-5" /> Save Changes
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;