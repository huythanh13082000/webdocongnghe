
const initialState = {
    list: [{
        src: "http://maytinh4.giaodienwebmau.com/wp-content/uploads/2020/08/32133_tuf_gaming_h3_red_04-168x168.png",
        priceold: "1200000",
        pricenew: "990000",
        name: "Tai nghe Asus TUF H3 Red",
        sale: 13,
        title: "/sanpham/Tai-nghe-Asus-TUF-H3-Red"
    },
    {
        src: "http://maytinh4.giaodienwebmau.com/wp-content/uploads/2020/08/25890_dxracer_valkyrie_series_gc_v03_nw_b4__1_.png",
        priceold: "1200000",
        pricenew: "990000",
        name: "Ghế game DXRacer Valkyrie series GC",
        sale: 13,
        title: "/sanpham/Ghe-DXRacer-Valkyrie-GC"
    },
    {
        src: "http://maytinh4.giaodienwebmau.com/wp-content/uploads/2020/08/31594_dxracer_drifting_series_dj133_n-168x168.jpg",
        priceold: "1200000",
        pricenew: "990000",
        name: "Ghế game DXRacer Drifting series DJ133-N",
        sale: 13,
        title: "/sanpham/Ghe-Drifting-DJ133-N"
        },
        {
            src: "http://maytinh4.giaodienwebmau.com/wp-content/uploads/2020/08/32097_rog_claymore_2d_aura-168x168.png",
            priceold: "1200000",
            pricenew: "990000",
            name: "Bàn phím cơ IKBC CD108 PD Blue switch",
            sale: 13,
            title: "/sanpham/Ban-phim-co-IKBC-CD108"
        },
        {
            src: "http://maytinh4.giaodienwebmau.com/wp-content/uploads/2020/08/23248_chu___t_asus_cerberus_1-168x168.jpg",
            priceold: "1200000",
            pricenew: "990000",
            name: "Chuột Asus Cerberus",
            sale: 13,
            title: "/sanpham/chuot-Asus-Cerberus",
        },
        {
            src: "http://maytinh4.giaodienwebmau.com/wp-content/uploads/2020/08/32512_rog_cetra_in_ear_headphones_01-e1598858090906-168x168.png",
            priceold: "1200000",
            pricenew: "990000",
            name: "Tai nghe Asus ROG Cetra Core",
            sale: 13,
            title: "/sanpham/Tai-nghe-Asus-ROG",
        },
        {
            src: "http://maytinh4.giaodienwebmau.com/wp-content/uploads/2020/08/ASUS-ROG-Zephyrus-M-GU502GU-1-510x510-1-168x168.jpg",
            priceold: "1200000",
            pricenew: "990000",
            name: "ASUS ROG Zephyrus M GU502GU-AZ090T",
            sale: 13,
            title: "/sanpham/ASUS-ROG-Zephyrus",
        },
        {
            src: "http://maytinh4.giaodienwebmau.com/wp-content/uploads/2020/08/32133_tuf_gaming_h3_red_04-168x168.png",
            priceold: "1200000",
            pricenew: "990000",
            name: "Tai nghe Asus TUF H3 Red",
            sale: 13,
            title: "/sanpham/Tai-nghe-Asus",
        },
        {
            
            src: "http://maytinh4.giaodienwebmau.com/wp-content/uploads/2020/08/ASUS-TUF-Gaming-FX705DT-510x510-1-168x168.jpg",
            priceold: "42600000",
            pricenew: "42000000",
            name: "ASUS TUF GAMING FX705DT-H7138T Gaming",
            sale: '',
            title: "/sanpham/ASUS-TUF-GAMING-FX705DT",
        },
        {
            
            src: "http://maytinh4.giaodienwebmau.com/wp-content/uploads/2020/08/ASUS-Vivobook-15-A512FA-Silver-168x168.jpg",
            priceold: "15600000",
            pricenew: "13600000",
            name: "ASUS VIVOBOOK 15 LAPTOP",
            sale: '',
            title: "/sanpham/ASUS-VivoBook-15",
        },
        {
            
            src: "http://maytinh4.giaodienwebmau.com/wp-content/uploads/2021/07/6c415996c245311b6854-168x168.jpg",
            priceold: "15600000",
            pricenew: "13600000",
            name: "CPU AMD Ryzen 7 5800x",
            sale: '',
            title: "/sanpham/CPU-AMD-Ryzen-7-5800x",
        },
        {
            
            src: "http://maytinh4.giaodienwebmau.com/wp-content/uploads/2021/07/isures-prod-17-168x168.jpg",
            priceold: "2600000",
            pricenew: "2300000",
            name: "RAM desktop G.SKILL Trident Z RGB F4",
            sale: '',
            title: "/sanpham/RAM-desktop-G.SKILL",
        },
    ],
 }
const productReducer = (state=initialState, action) => {
    switch (action.type) {
        case 'ADD_HOBBY': {
            return state
            
        }
        case 'SET_ACTIVE_HOBBY': {
           return state
        }
        default:
            return state;
    }
}
export default productReducer;