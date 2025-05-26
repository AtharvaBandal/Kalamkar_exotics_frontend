import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// import React, { useState, useEffect, useMemo } from 'react';
// import { Card, CardHeader, CardTitle, CardContent } from '../src/components/ui/card';
// import { Input } from '../src/components/ui/input';
// import { Button } from '../src/components/ui/button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '../src/components/ui/tabs';
// import { Textarea } from '../src/components/ui/textarea';
// import { Leaf, ShoppingBasket, Search, AlertCircle } from 'lucide-react';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../src/components/ui/select';
// import { Alert, AlertDescription } from '../src/components/ui/alert';
// const VegetableOrderSystem = () => {
// const allVegetables = [
//   { id: 1, name: 'Iceberg', image: 'https://via.placeholder.com/48' },
//   { id: 2, name: 'Capsicum Red', image: 'https://via.placeholder.com/48' },
//   { id: 3, name: 'Zucchini Green', image: 'https://via.placeholder.com/48' },
//   { id: 4, name: 'Cherry Tomato', image: 'https://via.placeholder.com/48' },
//   { id: 5, name: 'Lolo Rosso', image: 'https://via.placeholder.com/48' },
//   { id: 6, name: 'Chinese Pakchoy', image: 'https://via.placeholder.com/48' },
//   { id: 7, name: 'Zucchini Yellow', image: 'https://via.placeholder.com/48' },
//   { id: 8, name: 'Imported Avocado', image: 'https://via.placeholder.com/48' },
//   { id: 9, name: 'Indian Avocado', image: 'https://via.placeholder.com/48' },
//   { id: 10, name: 'Chinese Cabbage', image: 'https://via.placeholder.com/48' },
//   { id: 11, name: 'Simpson/Green Lettuce', image: 'https://via.placeholder.com/48' },
//   { id: 12, name: 'Capsicum Yellow', image: 'https://via.placeholder.com/48' },
//   { id: 13, name: 'Endive', image: 'https://via.placeholder.com/48' },
//   { id: 14, name: 'Leeks', image: 'https://via.placeholder.com/48' },
//   { id: 15, name: 'Fennel', image: 'https://via.placeholder.com/48' },
//   { id: 16, name: 'Garlic Chives', image: 'https://via.placeholder.com/48' },
//   { id: 17, name: 'Onion Chives', image: 'https://via.placeholder.com/48' },
//   { id: 18, name: 'Lemon Grass', image: 'https://via.placeholder.com/48' },
//   { id: 19, name: 'Lotus Stem', image: 'https://via.placeholder.com/48' },
//   { id: 20, name: 'Baby Corn', image: 'https://via.placeholder.com/48' },
//   { id: 21, name: 'Beans Sprout', image: 'https://via.placeholder.com/48' },
//   { id: 22, name: 'Celery', image: 'https://via.placeholder.com/48' },
//   { id: 23, name: 'Curled Parsley', image: 'https://via.placeholder.com/48' },
//   { id: 24, name: 'Flat Parsley', image: 'https://via.placeholder.com/48' },
//   { id: 25, name: 'Romainne Lettuce', image: 'https://via.placeholder.com/48' },
//   { id: 26, name: 'Roquette Aragulla', image: 'https://via.placeholder.com/48' },
//   { id: 27, name: 'Edible Flowers', image: 'https://via.placeholder.com/48' },
//   { id: 28, name: 'Micro Greens', image: 'https://via.placeholder.com/48' },
//   { id: 29, name: 'Asparagus', image: 'https://via.placeholder.com/48' },
//   { id: 30, name: 'Rosemerry', image: 'https://via.placeholder.com/48' },
// ];
//   const [orders, setOrders] = useState([]);
//   const [hotelName, setHotelName] = useState('');
//   const [currentOrder, setCurrentOrder] = useState({
//     items: allVegetables.map(veg => ({ ...veg, quantity: '', unit: 'kg' })),
//     note: '',
//     status: 'pending'
//   });
//   const [searchText, setSearchText] = useState('');
//   const [orderError, setOrderError] = useState('');
//   const filteredVegetables = useMemo(() =>
//     currentOrder.items.filter(item =>
//       item.name.toLowerCase().includes(searchText.toLowerCase())
//     ), [currentOrder.items, searchText]
//   );
//   const totalOrderQuantity = useMemo(() =>
//     (currentOrder.items.reduce((total, item) => {
//       const quantity = parseFloat(item.quantity) || 0;
//       const unitMultiplier = item.unit === 'kg' ? 1 : 0.001;
//       return total + (quantity * unitMultiplier);
//     }, 0)).toFixed(2),
//     [currentOrder.items]
//   );
//   const handleQuantityChange = (id, value) => {
//     const numericValue = value.replace(/[^0-9.]/g, '');
//     setCurrentOrder(prev => ({
//       ...prev,
//       items: prev.items.map(item =>
//         item.id === id ? { ...item, quantity: numericValue } : item
//       )
//     }));
//   };
//   const handleUnitChange = (id, unit) => {
//     setCurrentOrder(prev => ({
//       ...prev,
//       items: prev.items.map(item =>
//         item.id === id ? { ...item, unit } : item
//       )
//     }));
//   };
//   const fetchOrders = async () => {
//   const token = localStorage.getItem('token');
//   try {
//     const response = await fetch('http://localhost:3000/api/orders', {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     const data = await response.json();
//     console.log("Fetched orders:", data);
//     if (!Array.isArray(data)) {
//       throw new Error(data.error || 'Unexpected response');
//     }
//     setOrders(data);
//   } catch (err) {
//     console.error('Fetch orders error:', err);
//     setOrders([]); // fallback to avoid crash
//   }
// };
//   useEffect(() => {
//     fetchOrders();
//   }, []);
//   const handleSubmitOrder = async () => {
//     setOrderError('');
//     const orderItems = currentOrder.items.filter(item => item.quantity);
//     if (!hotelName) {
//       setOrderError('Please enter a hotel name.');
//       return;
//     }
//     if (orderItems.length === 0) {
//       setOrderError('Please add at least one item to the order.');
//       return;
//     }
//     const newOrder = {
//       hotelName,
//       items: orderItems,
//       note: currentOrder.note,
//       status: 'pending',
//       totalQuantity: totalOrderQuantity
//     };
//     try {
//       const token = localStorage.getItem('token');
//       const res = await fetch('http://localhost:3000/api/orders', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`  // <-- Add this
//     },
//   body: JSON.stringify(newOrder)
// });
//       if (!res.ok) {
//         throw new Error('Order submission failed');
//       }
//       const savedOrder = await res.json();
//       setOrders(prev => [savedOrder, ...prev]);
//       // Reset form
//       setCurrentOrder({
//         items: allVegetables.map(veg => ({ ...veg, quantity: '', unit: 'kg' })),
//         note: '',
//         status: 'pending'
//       });
//       setHotelName('');
//     } catch (err) {
//       setOrderError('Failed to submit order. Please try again.');
//     }
//   };
//   return (
//     <div className="flex justify-center my-8">
//       <Card className="w-full max-w-5xl bg-green-50 border-green-200">
//         <CardHeader className="bg-green-100 rounded-t-lg flex items-center">
//           <CardTitle className="flex items-center">
//             <Leaf className="mr-2 text-green-600" />
//             Kalamkar Exotics Order System
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Tabs defaultValue="new-order" className="space-y-4">
//             <TabsList className="bg-green-100 mb-4">
//               <TabsTrigger value="new-order" className="flex items-center">
//                 <ShoppingBasket className="mr-2" /> New Order
//               </TabsTrigger>
//               <TabsTrigger value="history">Order History</TabsTrigger>
//             </TabsList>
//             <TabsContent value="new-order" className="min-h-[600px] w-[900px] mx-auto">
//               <div className="space-y-4 w-full">
//                 <div className="relative">
//                   <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//                   <Input
//                     type="text"
//                     placeholder="Search vegetables..."
//                     value={searchText}
//                     onChange={(e) => setSearchText(e.target.value)}
//                     className="w-full pl-10 border-green-300 focus:ring-green-500"
//                   />
//                 </div>
//                 <Input
//                   type="text"
//                   placeholder="Enter Hotel Name"
//                   value={hotelName}
//                   onChange={(e) => setHotelName(e.target.value)}
//                   className="w-full border-green-300 focus:ring-green-500"
//                 />
//                 {orderError && (
//                   <Alert variant="destructive">
//                     <AlertCircle className="h-4 w-4" />
//                     <AlertDescription>{orderError}</AlertDescription>
//                   </Alert>
//                 )}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                   {filteredVegetables.map(item => (
//                     <div key={item.id} className="flex items-center space-x-2 p-3 border rounded-lg bg-white hover:bg-green-50 transition-colors border-green-200 shadow-sm">
//                       <div className="flex-grow">
//                         <div className="font-medium">{item.name}</div>
//                       </div>
//                       <div className="flex items-center space-x-2">
//                         <Input
//                           type="number"
//                           value={item.quantity}
//                           onChange={(e) => handleQuantityChange(item.id, e.target.value)}
//                           className="w-20 border-green-300 focus:ring-green-500"
//                           placeholder="Qty"
//                           min="0"
//                           step="0.1"
//                         />
//                         <Select
//                           value={item.unit}
//                           onValueChange={(unit) => handleUnitChange(item.id, unit)}
//                         >
//                           <SelectTrigger className="w-15">
//                             <SelectValue placeholder="Unit" />
//                           </SelectTrigger>
//                           <SelectContent>
//                             <SelectItem value="gms">gm</SelectItem>
//                             <SelectItem value="kg">kg</SelectItem>
//                           </SelectContent>
//                         </Select>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="bg-green-100 p-3 rounded-lg flex flex-col sm:flex-row justify-between items-center">
//                   <span className="font-medium mb-2 sm:mb-0">Total Order Quantity:</span>
//                   <span className="text-lg font-bold text-green-700">{totalOrderQuantity} kg</span>
//                 </div>
//                 <div className="space-y-2">
//                   <label className="block font-medium">Order Notes:</label>
//                   <Textarea
//                     value={currentOrder.note}
//                     onChange={(e) => setCurrentOrder(prev => ({ ...prev, note: e.target.value }))}
//                     placeholder="Add any special instructions here..."
//                     className="w-full border-green-300 focus:ring-green-500"
//                   />
//                 </div>
//                 <Button onClick={handleSubmitOrder} className="w-full bg-green-600 hover:bg-green-700 transition-colors">
//                   Submit Order
//                 </Button>
//               </div>
//             </TabsContent>
//             <TabsContent value="history" className="min-h-[600px] w-[900px] mx-auto">
//   <div className="space-y-4 w-full">
//     {Array.isArray(orders) && orders.length === 0 ? (
//       <div className="text-center text-gray-500 py-8 w-full">
//         No orders yet. Place your first order!
//       </div>
//     ) : (
//       <div className="w-full">
//         {Array.isArray(orders) &&
//           orders.map((order) => (
//             <Card
//               key={order._id}
//               className="p-4 mb-4 bg-white border-green-200 shadow-sm hover:shadow-md transition-shadow w-full"
//             >
//               <div className="space-y-4">
//                 <div className="flex flex-col sm:flex-row justify-between items-center">
//                   <span className="font-medium flex items-center mb-2 sm:mb-0">
//                     <ShoppingBasket className="mr-2 text-green-600" />
//                     {new Date(order.date).toLocaleDateString()}
//                   </span>
//                   <span
//                     className={`text-sm px-2 py-1 rounded-full ${
//                       order.status === 'pending'
//                         ? 'bg-yellow-100 text-yellow-800'
//                         : 'bg-green-100 text-green-800'
//                     }`}
//                   >
//                     {order.status}
//                   </span>
//                 </div>
//                 <div className="font-bold mb-2">Hotel: {order.hotelName}</div>
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
//                   {order.items.map((item, idx) => (
//                     <div
//                       key={item._id || idx}
//                       className="flex justify-between items-center"
//                     >
//                       <div className="flex items-center">
//                         <img
//                           src={item?.image || '/placeholder.png'}
//                           alt={item?.name || 'Item'}
//                           className="w-8 h-8 object-cover rounded-md mr-2"
//                         />
//                         <span>{item?.name}</span>
//                       </div>
//                       <span>
//                         {item?.quantity} {item?.unit}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//                 <div className="flex flex-col sm:flex-row justify-between mt-2 text-sm">
//                   <span>Total Quantity:</span>
//                   <span className="font-bold text-green-700">
//                     {order.totalQuantity} kg
//                   </span>
//                 </div>
//                 {order.note && (
//                   <div className="text-sm text-gray-600 italic border-l-4 border-green-300 pl-2">
//                     Note: {order.note}
//                   </div>
//                 )}
//               </div>
//             </Card>
//           ))}
//       </div>
//     )}
//   </div>
// </TabsContent>
//           </Tabs>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };
// export default VegetableOrderSystem;
import React, { useState, useEffect, useMemo } from 'react';
import {
  Card, CardHeader, CardTitle, CardContent,
  Input, Button, Tabs, TabsContent, TabsList, TabsTrigger,
  Textarea, Alert, AlertDescription, Dialog,
  DialogContent, DialogHeader, DialogTitle
} from '../src/components/ui';
import {
  Leaf, ShoppingBasket, AlertCircle
} from 'lucide-react';
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue
} from '../src/components/ui/select';

const VegetableOrderSystem = () => {
  const allVegetables = [
    { id: 1, name: 'Iceberg', image: 'https://via.placeholder.com/48' },
    { id: 2, name: 'Capsicum Red', image: 'https://via.placeholder.com/48' },
    // ... rest of your vegetables
  ];

  const [orders, setOrders] = useState([]);
  const [hotelName, setHotelName] = useState('');
  const [searchText, setSearchText] = useState('');
  const [orderError, setOrderError] = useState('');
  const [activeTab, setActiveTab] = useState('new-order');
  const [showDialog, setShowDialog] = useState(false);
  const [dialogMessage, setDialogMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [currentOrder, setCurrentOrder] = useState({
    items: allVegetables.map(veg => ({ ...veg, quantity: '', unit: 'kg' })),
    note: '',
    status: 'pending',
  });

  const filteredVegetables = useMemo(() =>
    currentOrder.items.filter(item => item.name.toLowerCase().includes(searchText.toLowerCase())),
    [currentOrder.items, searchText]
  );

  const totalOrderQuantity = useMemo(() => {
    const total = currentOrder.items.reduce((sum, item) => {
      const qty = parseFloat(item.quantity) || 0;
      const multiplier = item.unit === 'kg' ? 1 : 0.001;
      return sum + qty * multiplier;
    }, 0);
    return total.toFixed(2);
  }, [currentOrder.items]);

  const handleQuantityChange = (id, value) => {
    const numericValue = value.replace(/[^0-9.]/g, '');
    setCurrentOrder(prev => ({
      ...prev,
      items: prev.items.map(item => item.id === id ? { ...item, quantity: numericValue } : item),
    }));
  };

  const handleUnitChange = (id, unit) => {
    setCurrentOrder(prev => ({
      ...prev,
      items: prev.items.map(item => item.id === id ? { ...item, unit } : item),
    }));
  };

  const fetchOrders = async () => {
    const token = localStorage.getItem('token');
    try {
      const response = await fetch('https://localhost3000.com/api/orders', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await response.json();
      setOrders(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error('Fetch orders error:', err);
      setOrders([]);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleSubmitOrder = async () => {
    setOrderError('');
    const orderItems = currentOrder.items.filter(item => item.quantity && parseFloat(item.quantity) > 0);
    if (!hotelName.trim()) {
      setOrderError('Please enter a hotel name.');
      return;
    }
    if (orderItems.length === 0) {
      setOrderError('Please add at least one item to the order.');
      return;
    }

    const newOrder = {
      hotelName: hotelName.trim(),
      items: orderItems,
      note: currentOrder.note.trim(),
      status: 'pending',
      totalQuantity: totalOrderQuantity,
      paymentMethod,
    };

    if (paymentMethod === 'online') {
      // Redirect to backend payment API
      try {
        setIsSubmitting(true);
        setDialogMessage('Redirecting to payment...');
        setShowDialog(true);

        const token = localStorage.getItem('token');
        const res = await fetch('https://localhost3000.com/api/pay', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(newOrder),
        });

        const { paymentUrl } = await res.json();
        window.location.href = paymentUrl;
      } catch (err) {
        setOrderError('Failed to initiate payment.');
        setShowDialog(false);
        setIsSubmitting(false);
      }
      return;
    }

    // COD Order submission
    try {
      setIsSubmitting(true);
      setDialogMessage('Ordering...');
      setShowDialog(true);
      const token = localStorage.getItem('token');
      const res = await fetch('https://localhost3000.com/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newOrder),
      });
      if (!res.ok) throw new Error('Order submission failed');

      const savedOrder = await res.json();
      setOrders(prev => [savedOrder, ...prev]);
      setDialogMessage('Order placed successfully!');

      setCurrentOrder({
        items: allVegetables.map(veg => ({ ...veg, quantity: '', unit: 'kg' })),
        note: '',
        status: 'pending',
      });
      setHotelName('');

      setTimeout(() => {
        setShowDialog(false);
        setIsSubmitting(false);
        setActiveTab('history');
      }, 1500);
    } catch (err) {
      setOrderError('Failed to submit order. Please try again.');
      setShowDialog(false);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex justify-center my-8">
      <Card className="w-full max-w-5xl bg-green-50 border-green-200">
        <CardHeader className="bg-green-100 rounded-t-lg flex items-center">
          <CardTitle className="flex items-center">
            <Leaf className="mr-2 text-green-600" /> Kalamkar Exotics Order System
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
            <TabsList className="bg-green-100 mb-4">
              <TabsTrigger value="new-order" className="flex items-center">
                <ShoppingBasket className="mr-2" /> New Order
              </TabsTrigger>
              <TabsTrigger value="history">Order History</TabsTrigger>
            </TabsList>
            <TabsContent value="new-order" className="min-h-[600px] w-[900px] mx-auto">
              <div className="space-y-4 w-full">
                <Input placeholder="Search vegetables..." value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <Input placeholder="Enter Hotel Name" value={hotelName} onChange={(e) => setHotelName(e.target.value)} />
                <Select value={paymentMethod} onValueChange={setPaymentMethod}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Payment Method" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cod">Cash on Delivery</SelectItem>
                    <SelectItem value="online">Online Payment</SelectItem>
                  </SelectContent>
                </Select>
                {orderError && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{orderError}</AlertDescription>
                  </Alert>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredVegetables.map((item) => (
                    <div key={item.id} className="flex items-center space-x-2 p-3 border rounded-lg bg-white">
                      <div className="flex-grow">
                        <div className="font-medium">{item.name}</div>
                      </div>
                      <Input type="number" value={item.quantity} onChange={(e) => handleQuantityChange(item.id, e.target.value)} className="w-20" placeholder="Qty" />
                      <Select value={item.unit} onValueChange={(unit) => handleUnitChange(item.id, unit)}>
                        <SelectTrigger className="w-15">
                          <SelectValue placeholder="Unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="gms">gm</SelectItem>
                          <SelectItem value="kg">kg</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
                <div className="bg-green-100 p-3 rounded-lg flex justify-between items-center">
                  <span className="font-medium">Total Order Quantity:</span>
                  <span className="text-lg font-bold text-green-700">{totalOrderQuantity} kg</span>
                </div>
                <Textarea value={currentOrder.note} onChange={(e) => setCurrentOrder((prev) => ({ ...prev, note: e.target.value }))} placeholder="Add any special instructions here..." />
                <Button onClick={handleSubmitOrder} className="w-full bg-green-600 hover:bg-green-700">
                  {paymentMethod === 'cod' ? 'Submit COD Order' : 'Pay & Submit Order'}
                </Button>
              </div>
            </TabsContent>
            <TabsContent value="history" className="min-h-[600px] w-[900px] mx-auto">
              <div className="space-y-4 w-full">
                {orders.length === 0 ? (
                  <div className="text-center text-gray-500 py-8">No orders yet. Place your first order!</div>
                ) : (
                  orders.map((order) => (
                    <Card key={order._id} className="p-4 mb-4 bg-white">
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="font-medium flex items-center">
                            <ShoppingBasket className="mr-2 text-green-600" /> {new Date(order.date).toLocaleDateString()}
                          </span>
                          <span className={`text-sm px-2 py-1 rounded-full ${order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>{order.status}</span>
                        </div>
                        <div className="font-bold">Hotel: {order.hotelName}</div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {order.items.map((item, idx) => (
                            <div key={idx} className="flex justify-between items-center">
                              <div className="flex items-center">
                                <img src={item.image} alt={item.name} className="w-8 h-8 object-cover rounded-md mr-2" />
                                <span>{item.name}</span>
                              </div>
                              <span>{item.quantity} {item.unit}</span>
                            </div>
                          ))}
                        </div>
                        <div className="flex justify-between mt-2 text-sm">
                          <span>Total Quantity:</span>
                          <span className="font-bold text-green-700">{order.totalQuantity} kg</span>
                        </div>
                        {order.note && (
                          <div className="text-sm text-gray-600 italic border-l-4 border-green-300 pl-2">
                            Note: {order.note}
                          </div>
                        )}
                      </div>
                    </Card>
                  ))
                )}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle>Order Status</DialogTitle>
          </DialogHeader>
          <div className="text-center text-green-800 py-4">{dialogMessage}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VegetableOrderSystem;