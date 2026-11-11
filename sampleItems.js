// Sample data only. Replace the `image` URLs with your own royalty-free photos
// (e.g. from Unsplash / Pexels) before the final submission.
// Locations are general descriptions only. No real coordinates are used.
// If an image fails to load, ItemImage shows a placeholder using `emoji` and `tone`.

const img = (keyword, lock) => `https://loremflickr.com/480/320/${keyword}?lock=${lock}`

export const recentItems = [
  { id: 1, type: 'lost',  title: 'White wireless earphones', title_zh: '白色無線耳機', place: 'Library, 2F',        place_zh: '圖書館 2 樓',   time: '2 hours ago', time_zh: '2 小時前', image: img('earphones', 1), emoji: '🎧', tone: 'sky' },
  { id: 2, type: 'found', title: 'Keys with a blue keychain', title_zh: '藍色鑰匙圈鑰匙', place: 'Cafeteria',        place_zh: '學生餐廳',       time: '3 hours ago', time_zh: '3 小時前', image: img('keys', 2), emoji: '🔑', tone: 'amber' },
  { id: 3, type: 'found', title: 'Brown leather wallet', title_zh: '咖啡色皮夾', place: 'Science Building',  place_zh: '理工大樓',       time: 'Yesterday',   time_zh: '昨天',     image: img('wallet', 3), emoji: '👛', tone: 'orange' },
  { id: 4, type: 'lost',  title: 'Green water bottle', title_zh: '綠色水壺', place: 'Sports field',        place_zh: '運動場',         time: 'Yesterday',   time_zh: '昨天',     image: img('waterbottle', 4), emoji: '🧴', tone: 'emerald' },
  { id: 5, type: 'lost',  title: 'Black backpack', title_zh: '黑色後背包', place: 'Lecture hall',          place_zh: '大講堂',         time: '2 days ago',  time_zh: '2 天前',   image: img('backpack', 5), emoji: '🎒', tone: 'slate' },
  { id: 6, type: 'found', title: 'Notebook and pencil case', title_zh: '筆記本與鉛筆盒', place: 'Classroom building', place_zh: '教學大樓',    time: '2 days ago',  time_zh: '2 天前',   image: img('notebook', 6), emoji: '📚', tone: 'violet' },
]

export const suggestedMatches = [
  { id: 1, score: 92, lost: recentItems[0], found: { ...recentItems[0], id: 101, type: 'found', place: 'Library, 1F desk', place_zh: '圖書館 1 樓座位', image: img('earbuds', 11) } },
  { id: 2, score: 85, lost: { ...recentItems[2], id: 102, type: 'lost', title: 'Brown wallet', title_zh: '咖啡色皮夾', place: 'Near Science Building', place_zh: '理工大樓附近', image: img('wallet', 12) }, found: recentItems[2] },
  { id: 3, score: 78, lost: { ...recentItems[1], id: 103, type: 'lost', title: 'House keys, blue tag', title_zh: '藍色吊牌鑰匙', place: 'Cafeteria area', place_zh: '餐廳附近', image: img('keychain', 13) }, found: recentItems[1] },
]

export const stats = { lost: 24, found: 31, returned: 18 }
