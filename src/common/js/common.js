export function formatDate(date){
   const year = date.getFullYear()
   
   const month = date.getMonth()+1
   const day = date.getDate()
   let str = year+'.'+month+'.'+day
   return str 
}
export function getWeek(date){
    const week = date.getDay()
    const weekText=['周日','周一','周二','周三','周四','周五','周六']
    return weekText[week]
}