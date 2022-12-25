module.exports.index = function(req,res){
    return res.json(200,
        {
            message: "List of posts",
            post:[
                {
                    "title": "Ae Dil Hai Mushkil",
                    "url": "https://wynk.in/music/song/kesariya-from-brahmastra/sm_A10328E0010427685D#queue" ,
                    "image": "https://img.wynk.in/unsafe/220x220/filters:no_upsc…/1658030708/srch_sonymusic_A10328E0010427685D.jpg",
                    "artist": "Arjit Singh",
                    "duration": "4:28",
                    "rating": "4.8"
                },
                {
                    "title": "Shayad",
                    "url": "https://wynk.in/music/song/kesariya-from-brahmastra/sm_A10328E0010427685D#queue" ,
                    "image": "https://img.wynk.in/unsafe/220x220/filters:no_upsc…/1658030708/srch_sonymusic_A10328E0010427685D.jpg",
                    "artist": "Arjit Singh",
                    "duration": "4:07",
                    "rating": "4.3"
                },
                {
                    "title": "Ektarfa",
                    "url": "https://wynk.in/music/song/ektarfa/wm_INW262200065" ,
                    "image": "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/music/1657627883/srch_wmg_INW262200065.jpg",
                    "artist": "King",
                    "duration": "3:50",
                    "rating": "2.8"
                },
                {
                    "title": "Habibi",
                    "url": "https://wynk.in/music/song/habibi-indian-remix/wm_A10302B00077986192" ,
                    "image": "https://img.wynk.in/unsafe/248x248/filters:no_upscale():strip_exif():format(webp)/http://s3-ap-south-1.amazonaws.com/wynk-music-cms/srch_wmg/music/5054197270024/1660286728/srch_wmg_A10302B00077986192.jpg",
                    "artist": "King",
                    "duration": "2:58",
                    "rating": "3.2"
                }
            ]
        }
    )
}