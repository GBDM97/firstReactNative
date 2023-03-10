

export default function GetImageUri (item: string) {
    let r = "empty"
    item === "Africa" ? r = "https://i0.wp.com/pisa.tur.br/blog/wp-content/uploads/2018/07/madagascar_capablog-1.jpg?fit=1024%2C448&ssl=1":"";
    item === "Antarctica" ? r = "https://cdn.britannica.com/08/135708-050-2346C1CF/Paradise-Bay-Antarctica.jpg":"";
    item === "Asia" ? r = "https://www.intrepidtravel.com/adventures/wp-content/uploads/2017/08/china_shanghai_yuyuan-garden-city.jpg":"";
    item === "Europe" ? r = "https://www.travelandleisure.com/thmb/SPUPzO88ZXq6P4Sm4mC5Xuinoik=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/eiffel-tower-paris-france-EIFFEL0217-6ccc3553e98946f18c893018d5b42bde.jpg":"";
    item === "North America" ? r = "https://www.history.com/.image/t_share/MTU3ODc4NjAzNTE1NTA0MzUx/gettyimages-555173607-2.jpg":"";
    item === "Oceania" ? r = "https://cdn.kimkim.com/files/a/content_articles/featured_photos/3117192df163b1c655a6081e58961533bd8e1afe/big-317a87546e8649aae22e694d77523453.jpg":"";
    item === "South America" ? r = "https://a.cdn-hotels.com/gdcs/production143/d357/42fb6908-dcd5-4edb-9f8c-76208494af80.jpg?impolicy=fcrop&w=800&h=533&q=medium":"";
    return r;
}
