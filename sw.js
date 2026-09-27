// صفحة التحكم محتاجة نت دايمًا - الملف ده بس عشان تتضاف للشاشة الرئيسية كتطبيق
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
