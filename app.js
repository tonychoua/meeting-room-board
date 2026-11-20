// 預約時段衝突判斷（一般 script 載入，函式掛在全域）
// 在 list 中找出與 b 衝突的既有預約：同會議室、同日期、時段重疊。
// 修改時不與自己（相同 id）比對。找到回傳該筆既有預約，沒有衝突則回傳 null。
function findConflict(b, list) {
  for (var i = 0; i < list.length; i++) {
    var o = list[i];
    if (o.id === b.id) continue; // 修改時不與自己比對
    if (o.roomId === b.roomId && o.date === b.date &&
        b.startHour < o.endHour && o.startHour < b.endHour) {
      return o;
    }
  }
  return null;
}
