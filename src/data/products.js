const PRODUCT_DATA = {
  Cheese: {
    icon: "🧀",
    img: "https://i.postimg.cc/ZRJ1TSjb/Gemini-Generated-Image-betjn3betjn3betj.png",
    banner: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=1200&h=400&fit=crop",
    description: "Shredded, Diced, Blocks and Slices from Go, Amul, and D'lecta.",
    subcategories: {
      "Shredded & Diced": {
        products: [
          { name: "Mozzarella Diced", brand: "Go Cheese", size: "2kg", img: "https://i.postimg.cc/j55bhWfW/274423_2_gowardhan_go_mozzarella_cheese_diced.webp" },
          { name: "Mozzarella Shredded", brand: "Go Cheese", size: "2kg", img: "https://i.postimg.cc/QtyrYXg5/go_shredded_mozzarella_2kg_500x500.webp" },
          { name: "Mozzarella Blend", brand: "Go Cheese", size: "2kg", img: "https://i.postimg.cc/c4BXQ9X3/go-mozzarella-blend-diced-cheese-2-kg-product-images-o491107221-p603417043-0-202307311928.webp" },
          { name: "Mozzarella Diced", brand: "Go Cheese", size: "1kg", img: "https://i.postimg.cc/j55bhWfW/274423_2_gowardhan_go_mozzarella_cheese_diced.webp" },
          { name: "Mozzarella Blend", brand: "Go Cheese", size: "1kg", img: "https://i.postimg.cc/Dy470GgD/40327063-1-go-cheese-mozzarella-cheddar-blend.webp" },
        
          { name: "Cheddar Diced", brand: "Go Cheese", size: "2kg", img: "https://i.postimg.cc/y8B6GdhB/OW-B9Q6NQF8-n-Ga-XJRr.jpg" },
          { name: "Orange Cheddar Diced", brand: "Go Cheese", size: "2kg", img: "https://i.postimg.cc/4dyVz5NK/OW-B9Q7q-Fwsry-PXy-Au-F.jpg" },
          { name: "Monterey Jack Diced", brand: "Go Cheese", size: "2kg", img: "https://i.postimg.cc/g0Qfft93/OW-B9Q8l-Pfbr-LDxplqt.jpg" },
          { name: "Diced Mozzarella", brand: "Amul", size: "1kg", img: "https://i.postimg.cc/Fs6gbM0r/846f820927e038c4dabca5121531e921.jpg" },
          { name: "Blend Mozzarella", brand: "Amul", size: "1kg", img: "https://i.postimg.cc/pV3HDLLT/Diced-Blend-2.png" },
          { name: "Shredded Cheese", brand: "Dlecta", size: "2kg", img: "https://i.postimg.cc/FKSvpk1r/5a665359d740bf10c6f2d41eab7553dc.png" },
          { name: "Diced Pizza Topping", brand: "Dlecta", size: "1kg", img: "https://i.postimg.cc/pXjB229v/Whats-App-Image-2025-11-10-at-11-27-10-b6062737.jpg" },
        ],
      },
      "Cheese Blocks": {
        products: [
          { name: "Processed Cheese Block", brand: "Go Cheese", size: "1kg", img: "https://i.postimg.cc/rsPkDqZZ/GO-Processed-Cheese-200-kg.png" },
          
          { name: "Filler Cheese", brand: "Go Cheese", size: "500gm", img: "https://i.postimg.cc/sDDY7V88/pixelcut-export.png" },
          { name: "Orange Cheese Block", brand: "Go Cheese", size: "2kg", img: "https://i.postimg.cc/Bn67JWGL/Back-9493015c-8c9c-4918-bba3-519cf8e67a6f.jpg" },
          { name: "Processed Cheese Block", brand: "Amul", size: "1kg", img: "https://i.postimg.cc/j2LV0Gqc/Processed-Cheese-1.png" },
          { name: "Processed Cheese Block", brand: "Dlecta", size: "1kg", img: "https://i.postimg.cc/WpFjykd8/Front-7a54b105-cc50-4473-816d-331f546e644d.jpg" },
        ],
      },
      "Cheese Slices": {
        products: [
          { name: "White Cheese Slice", brand: "Go Cheese", size: "750gm+50gm (50 slices)", img: "https://i.postimg.cc/nhdQv5gL/100369165-4-go-cheese-slices-plain.webp" },
          { name: "Orange Cheese Slice", brand: "Go Cheese", size: "900g (60 slices)", img: "https://i.postimg.cc/tJfhtcYc/NTTd-BMqb8g-MAybs05t8.jpg" },
          { name: "White Cheese Slice", brand: "Amul", size: "750g", img: "https://i.postimg.cc/MGTVNxVj/229136-2-2-amul-cheese-slices.webp" },
          { name: "Orange Slice", brand: "Dlecta", size: "765g (50 slices)", img: "https://i.postimg.cc/rFMcqps2/8ffced80-02dc-454e-b898-c771358d9f89-Dlecta-Cheese-Slice(Individually-Wrapped51x15Grams)765gm.jpg" },
        ],
      },
      "Specialty & Dips": {
        products: [
          { name: "Cream Cheese", brand: "Dlecta", size: "1kg", img: "https://i.postimg.cc/cJg6fJf9/Cream-Cheese-Front.png" },
          { name: "Mascarpone", brand: "Dlecta", size: "400g", img: "https://i.postimg.cc/zGMGD14b/Front.jpg" },
          { name: "Feta", brand: "Dlecta", size: "250g", img: "https://i.postimg.cc/fywwqWS1/Back-7b0fef08-ab9b-4a2a-a68b-9ee619a332d9.png" },
          { name: "Cheese Sauce", brand: "Dlecta", size: "1kg", img: "https://i.postimg.cc/4N2Jwg4g/1-c473cd85-d859-4b48-b04b-4c6cf1662b52.jpg" },
          { name: "Parmesan Cheese", brand: "Imported", size: "4-5kg", img: "https://i.postimg.cc/DyNTLP6R/parmesan-4-to-5kg-block-imported-500x500.webp" },
        ],
      },
    },
  },

  "Sauces & Condiments": {
    icon: "🍅",
    img: "https://i.postimg.cc/SK5bf5fG/Gemini-Generated-Image-a6bdxga6bdxga6bd.png",
    banner: "https://images.unsplash.com/photo-1472476443507-c7a5948772fc?w=1200&h=400&fit=crop",
    description: "Ketchups, Mayonnaise, Spreads, and Asian Sauces.",
    subcategories: {
      "Ketchups & Sachets": {
        products: [
          { name: "Tomato Ketchup Bottle", brand: "Veeba", size: "1.2kg", img: "https://i.postimg.cc/RZqwb4c1/2a38dd4446f3b64c452a9ad01ed9b2c3.png" },
          { name: "Tomato Ketchup Pouch", brand: "Veeba", size: "2kg", img: "https://i.postimg.cc/zGVRkNWJ/veeba-tomato-ketchup-chef-s-special-pack-of-2-900gm-each-product-images-orvlcnct8p3-p610698008-1-202.webp" },
          { name: "Tomato Ketchup Sachet", brand: "Veeba", size: "8g", img: "https://i.postimg.cc/qvtCxQTX/aa40c5faddec5f1527a589cdd9062820.png" },
          { name: "Tomato Ketchup ", brand: "Golden Crown", size: "6kg", img: "https://i.postimg.cc/htGNyzyp/4e52ba61356df8020f0aa86231117e1d.pnghttps://i.postimg.cc/htGNyzyp/4e52ba61356df8020f0aa86231117e1d.png" },
          { name: "Oregano Sachet", brand: "Veeba", size: "0.8g", img: "https://i.postimg.cc/90Rjn4Fp/eb7d8004320d008719bec5915648e757.png" },
          { name: "Chilli Flakes Sachet", brand: "Veeba", size: "0.8g", img: "https://i.postimg.cc/B6tWj8DC/shopping-(1).webp" },
          { name: "Oregano Pouch", brand: "Veeba", size: "500gm", img: "https://i.postimg.cc/kGK7563N/Mldz8BM7El-ETS97vm-Tn.jpg" },
          { name: "Chilli Flakes Pouch", brand: "Veeba", size: "500gm", img: "https://i.postimg.cc/6qJNFW2G/37188778a0be090ec28f95aa18db46e9.png" },
        ],
      },
      "Mayonnaise & Spreads": {
        products: [
          { name: "Mayonnaise Pouch", brand: "Veeba", size: "1kg", img: "https://i.postimg.cc/WpXn99QK/shopping.webp" },
          { name: "Garlic Chilli Spread", brand: "Veeba", size: "1kg", img: "https://i.postimg.cc/G37FP4yN/691d5aef911e761fe41d11f7ed8acec7.pnghttps://i.postimg.cc/G37FP4yN/691d5aef911e761fe41d11f7ed8acec7.png" },
          { name: "White Cheese Dressing", brand: "Veeba", size: "1kg", img: "https://i.postimg.cc/FskLjDmM/42b890d550742dda9215a75221b3e2c2.png" },
          { name: "Cheese Blend & Dip", brand: "Veeba", size: "1kg", img: "https://i.postimg.cc/VkBW3mvW/shopping-(3).webp" },
          { name: "Spicy Garlic Mayonnaise", brand: "Veeba", size: "1kg", img: "https://i.postimg.cc/qv08cSwg/shopping-(4).webp" },
          { name: "Cheesy Spread & Dip", brand: "Veeba", size: "1kg", img: "https://i.postimg.cc/mDcM2sL1/a3c6c23dbc708a8b21253834e4db9845.png" },
          { name: "Chipotle", brand: "Veeba", size: "1kg", img: "https://i.postimg.cc/FKzkD4Lh/dc8ba53ed6dfb22e034e82cfa548017c.png" },
          { name: "Cheese & Jalapeño Dip", brand: "Veeba", size: "1kg", img: "https://i.postimg.cc/W1bd1vSJ/909763194dd3c669a0f9d2fa8d9d38fe.png" },
        ],
      },
      "Culinary Sauces": {
        products: [
          { name: "Sriracha Sauce", brand: "Veeba", size: "1kg", img: "https://i.postimg.cc/RhBF55NM/shopping-(5).webp" },
          { name: "Szechwan Sauce", brand: "Veeba", size: "1kg", img: "https://i.postimg.cc/cHq1wy7M/shopping-(6).webp" },
          { name: "Pizza Pasta Sauce", brand: "Veeba", size: "1kg", img: "https://i.postimg.cc/52TfWdRp/shopping-(7).webp" },
          { name: "Pizza Topping", brand: "Veeba", size: "1kg", img: "https://i.postimg.cc/SQdqNzPM/shopping-(8).webp" },
          { name: "BBQ Sauce", brand: "Veeba", size: "1kg", img: "https://i.postimg.cc/tTyQ9Xtd/10f1fb9f2d3276ebbe1cfab66db02fd9.png" },
          { name: "Makhni Gravy", brand: "Veeba", size: "1kg", img: "https://i.postimg.cc/DfxkK3W1/7995a340d66d8e5a4fb93b6d2dd84e8b.png" },
          { name: "Kasundi PET Btl", brand: "Golden Crown", size: "1kg", img: "https://i.postimg.cc/T3XZVdBW/f8fbb9eeb072105f0ae54ee6310da78e.png" },
          { name: "Sweet Chilli Sauce", brand: "Golden Crown", size: "980g", img: "https://i.postimg.cc/6QqzRF66/sweet-chilli-sauce-500x500.webphttps://i.postimg.cc/6QqzRF66/sweet-chilli-sauce-500x500.webp" },
        ],
      },
    },
  },

  Dairy: {
    icon: "🥛",
    img: "https://i.postimg.cc/sXRwz4jz/Gemini-Generated-Image-aqr3ztaqr3ztaqr3.png",
    description: "Creams, Milk, Butter and Ghee.",
    subcategories: {
      
     "Milk & Powders": {
        products: [
          { name: "Gold Milk (Full Cream)", brand: "Amul", size: "1L", img: "https://i.postimg.cc/BvJbVGLd/shopping_(9).webp" },
          { name: "Taaza Milk (Toned)", brand: "Amul", size: "1L", img: "https://i.postimg.cc/kgQDs5GC/amul_taaza_toned_milk_1_l_pouch_product_images_o590000597_p590049233_0_202510091903.webp" },
          { name: "Amulya Milk Powder", brand: "Amul", size: "1kg", img: "https://i.postimg.cc/XYfXLvq3/ccdfd30cdfeb3c4ed8068034afa1c14f.png" },
        ],
      },
      "Butter": {
        products: [
          { name: "CP Butter (Salted)", brand: "Amul", size: "500g", img: "https://i.postimg.cc/Sx6jdKRp/104864_2_2_amul_butter_pasteurised.webp" },
          { name: "IP Butter", brand: "Amul", size: "500g", img: "https://i.postimg.cc/pLcVqnvz/ip-butter-amul-1000x1000-removebg-preview.png" },
          { name: "Unsalted Butter", brand: "Dlecta", size: "500g", img: "https://i.postimg.cc/GmF9Kptw/47be37265b2037fd3db0de29404a7f1b.jpg" },
          
        ],
      },
      "Ghee":{
        products:[
          { name: "Cow Ghee", brand: "Amul", size: "1L", img: "https://i.postimg.cc/kgQDs5Gq/02_fop_amul_cow_ghee_tetrapack_1l_1024x1024.avif" }
        ],
        
      },
    },
  },

  "Frozen Snacks ": {
    icon: "🍟",
    img: "https://i.postimg.cc/kXt6N3Nh/Gemini-Generated-Image-v27hiev27hiev27h.png",
    description: "Full range of McCain commercial frozen products.",
    subcategories: {
      "Fries & Wedges": {
        products: [
          { name: "Favorita 6mm", brand: "McCain", size: "2.5kg", img: "https://i.postimg.cc/MTfKNZ5B/shopping.webp" },
          { name: "Regular 6mm", brand: "McCain", size: "2.5kg", img: "https://i.postimg.cc/3J14gRcR/ee611f411106f1ebb7c80a9ff9880a3b.png" },
          { name: "favorita 9mm", brand: "McCain", size: "2.5", img: "https://i.postimg.cc/HLhk68wk/54e939cc954df492bbfc600f9c29e8a5.png" },
          {name : "Regular 9mm", brand: "McCain", size: "2.5kg", img: " https://i.postimg.cc/Zn7m51wh/3dd3ecddb97fb4c54e21b4c9400f9b4d.png"},
          { name: "Surecrisp 9mm", brand: "McCain", size: "3kg", img: "https://i.postimg.cc/76JYdP9H/b89119b1629a90ef9fd9f3fe6ea16f23.png" },
          
         { name: "Savoury Wedges", brand: "McCain", size: "2.5kg", img: "https://i.postimg.cc/XJB7mNLB/shopping_(2).webp" },
        ],

      },
      "Patties & Tikkis": {
        products: [
          { name: "Aloo Tikki Patty", brand: "Hungritos", size: "1.5kg", img: "https://i.postimg.cc/B6PQkZp6/c82e93797d1e05573ab683f7cfa81a0e.png" },
          { name: "Herb Chilli Patty", brand: "McCain", size: "1.5kg", img: "https://i.postimg.cc/zfcGxHCV/a739af7b29730a52f91872139b54cfae.png" },
          { name: "Popular Veggie Burger Patty", brand: "McCain", size: "1.5kg", img: "https://i.postimg.cc/pT5X4VCL/cc91a86c2d2a66810db10fb92f870cfe.png" },
          { name: "Paneer Patty", brand: "McCain", size: "1.05kg", img: "https://i.postimg.cc/d0xV5Z21/21f066870fcbced03cd032476cb2c947.png" },
        ],
      },
      "Bites & Nuggets": {
        products: [
          { name: "Veggie Nuggets", brand: "McCain", size: "1kg", img: "https://i.postimg.cc/g0JvwRz5/NKrg87Lj.jpg" },
          { name: "Veggie Fingers", brand: "McCain", size: "1kg", img: "https://i.postimg.cc/yd3Yt6jk/cc396263f0de26a75d38fbf6dee300e8.png" },
          { name: "Potato Cheese Shots", brand: "McCain", size: "1kg", img: "https://i.postimg.cc/jjFSMnHC/5151dd2898c67f067c12bbe4897d4aac.png" },
          { name: "Cheese Triangles", brand: "McCain", size: "1kg", img: "https://i.postimg.cc/qR6MSBwg/d6193841ed5a170b55ae992e4856251f.jpg" },
          { name: "Chilli Garlic Pops", brand: "McCain", size: "1.5kg", img: "https://i.postimg.cc/pd6Ls5fX/0f2d7d9a3cd1905c734ea2f2312419eb.png" },
        ],
      },
    },
  },

  "Canned & Glass Jar": {
    icon: "🥫",
    img: "https://i.postimg.cc/3JSyHr8C/1770551314698.png",
    description: "Preserved vegetables and fruits from Golden Crown.",
    subcategories: {
      "Tinned Vegetables": {
        products: [
          { name: "Button Mushroom", brand: "Golden Crown", size: "800g", img: "https://i.postimg.cc/mrbmmtb3/60ce8c53d7867d6e78e69a866181d1e7.png" },
          { name: "Baby Corn", brand: "Golden Crown", size: "800g", img: "https://i.postimg.cc/SKyggJy5/aeb9588f45ebe04a740aceed823b6ee3.png" },
          { name: "Sweet Corn Kernels", brand: "Golden Crown", size: "400g", img: "https://i.postimg.cc/kghkRQNh/9e4567deec97c1af0356a8a3a772954a.png" },
          { name: "Whole Peeled Tomatoes", brand: "Golden Crown", size: "2.5kg", img: "https://i.postimg.cc/vZ7P7Wd7/2b626bba947bb68fe7ec72d4545920b3.png" },
          { name: "Bamboo Shoots", brand: "Imported", size: "800g", img: "https://i.postimg.cc/brcPDxhR/download-(4).png" },
        ],
      },
      "Glass Jar Items": {
        products: [
          { name: "Pitted Black Olives", brand: "Golden Crown", size: "400g", img: "https://i.postimg.cc/CxmwPnGF/euro-gold-pitted-black-olive-450g-500x500.webp" },
          { name: "Red Paprika", brand: "Golden Crown", size: "680g", img: "https://i.postimg.cc/Dz2xx82d/945e4e042aca6619acb46fa7b04d81eb.jpg" },
          { name: "Jalapeno", brand: "Golden Crown", size: "680g", img: "https://i.postimg.cc/5NW96V4h/shopping-(3).webp" },
          { name: "Gherkins", brand: "Golden Crown", size: "800gm", img: "https://i.postimg.cc/L8kykzM3/7bdf3255b028e134a8963945ecdf48c8.png" },
        ],
      },
      "Tinned Fruits": {
        products: [
          { name: "Pineapple Slice", brand: "Golden Crown", size: "850g", img: "https://i.postimg.cc/QMXffH8r/f08541d4f76dc8e3d68fea9d667ef0da.png" },
          { name: "Fruit Cocktail", brand: "Golden Crown", size: "850g", img: "https://i.postimg.cc/BvqmmXqz/b84e6a7f91d794f137e86624383ba3b2.png" },
          { name: "Mango Pulp", brand: "Golden Crown", size: "850g", img: "https://i.postimg.cc/R0MggNMk/c4509a8a02cb9b920a3ab710ae717be5.png" },
          { name: "Red Cherry", brand: "Golden Crown", size: "850g", img: "https://i.postimg.cc/SKyggJy6/257b999bdeafad2a846d7d79c442b896.png" },
        ],
      },
    },
  },

  Beverage: {
    icon: "🍹",
    img: "https://i.postimg.cc/0yjw6MWW/1770551309525.png",
    description: "Veeba Barisco cocktail and coffee syrups.",
    subcategories: {
      "Cocktail Syrups": {
        products: [
          { name: "Mojito Mint", brand: "Veeba Barisco", size: "750ml", img: "https://i.postimg.cc/mD0M5gxS/27a5c98ce09f5ee1be1759a737ebb56d.png" },
          { name: "Blue Curacao", brand: "Veeba Barisco", size: "750ml", img: "https://i.postimg.cc/90ZT5HVG/c72c32deda7785149bb5bcac46f4a0b6.png" },
          { name: "Green Apple", brand: "Veeba Barisco", size: "750ml", img: "https://i.postimg.cc/mD0M5gxN/2d45ddcff7bd92012890ac718bb18a97.png" },
          { name: "Grenadine", brand: "Veeba Barisco", size: "750ml", img: "https://i.postimg.cc/d1zdxVMj/6b7a99357479e2724447bb5a3be6e6ea.png" },
          { name: "Kala Khatta", brand: "Veeba Barisco", size: "750ml", img: "https://i.postimg.cc/yxc94CB9/595b0313ab84d74bff124ee098b1057f.png" },
        ],
      },
      "Coffee Syrups": {
        products: [
          { name: "Vanilla", brand: "Veeba Barisco", size: "750ml", img: "https://i.postimg.cc/HnX5D1HX/3475b8209f5561d9f2f0b0d250832775.png" },
          { name: "Caramel", brand: "Veeba Barisco", size: "750ml", img: "https://i.postimg.cc/HnX5D1Hb/Barisco_Caramel_Listing_FOP_removebg_preview_(1).png" },
          { name: "Hazelnut", brand: "Veeba Barisco", size: "750ml", img: "https://i.postimg.cc/wMLJ8YHk/d7351b6c4d702ca15afcb4553bd28596.png" },
          { name: "Irish Creme", brand: "Veeba Barisco", size: "750ml", img: "https://i.postimg.cc/4drtSxCP/142b18d059f2ba3776f618a720cb877a.png" },
        ],
      },
    },
  },

  "Imported & Asian": {
    icon: "🌏",
    img: "https://i.postimg.cc/QC7Sn7vt/Gemini-Generated-Image-69qwch69qwch69qw.png",
    description: "Specialty Asian flours, sauces, and ingredients.",
    subcategories: {
      "Asian Flours & Pastry": {
        products: [
          { name: "Tempura Flour Welna", brand: "Imported", size: "700gm", img: "https://i.postimg.cc/jdy9vWVq/0cd9765cfbc8601df572a57c5e61e18b.jpg" },
          { name: "Hong Kong Flour", brand: "Imported", size: "1kg", img: "https://i.postimg.cc/ncq5Ts8z/1209_1_7f5d90d5_1e20_4008_9386_c4780d7d15c1.jpg" },
          { name: "Spring Roll Sheet", brand: "Imported", size: "50pcs", img: "https://i.postimg.cc/m27qVcx7/shopping.webp" },
          { name: "Filo Pastry", brand: "Imported", size: "1kg", img: "https://i.postimg.cc/15DTMgxf/40218338_1_switz_filo_dough_sheets_thin_for_sweet_preparations.webp" },
        ],
      },
      "Asian Sauces": {
        products: [
          { name: "Kikkoman Soy Sauce", brand: "Kikkoman", size: "1L", img: "https://i.postimg.cc/CLbtJZy8/c66d66891728e952904c1963a4870c91.jpg" },
          { name: "Panda Oyster Sauce", brand: "LKK", size: "2.2kg", img: "https://i.postimg.cc/KvLzN5vs/PANDA-OYSTER-SAUCE-255g-INJPG.jpg" },
          { name: "Gochujang", brand: "Imported", size: "500gm", img: "https://i.postimg.cc/fTYF534k/71i_W0l_Eu_Ng_L_SL1500.jpg" },
          { name: "Fish Sauce Tiparos", brand: "Imported", size: "700ml", img: "https://i.postimg.cc/Wb0KSDRJ/aa3a83dc1c9f6de9470723e8ce25871e.jpg" },
        ],
      },
    },
    
  },

    "Frozen Raw": {
    icon: "❄️",
    img: "https://i.postimg.cc/SxRYS4Ng/Gemini-Generated-Image-6fav0x6fav0x6fav.png",
    subcategories: {"Vegetables": {
        products: [
          { name: "Green Peas", brand: "Generic", size: "1kg", img: "https://i.postimg.cc/nhyN1vrS/shopping_(2).webp "  },
          { name: "Sweet Corn", brand: "Generic", size: "1kg" , img: " https://i.postimg.cc/YC5Tx10y/shopping.webp" },
          { name: "Soya Chaap", brand: "Generic", size: "500gm" , img: " https://i.postimg.cc/RZk2TchG/099221eb5c232fb0798f2f3bd7ac1deb.png" },
          { name: "Edamame", brand: "Imported", size: "500gm", img: "https://i.postimg.cc/2Ssgx4yH/shopping_(1).webp "  }
        ]
      },
      "Seafood": {
        products: [
          { name: "Vietnamese Basa", brand: "Imported", size: "2.5kg" , img: "https://i.postimg.cc/mgvKSQkj/959edb30453563d06c30351d9f90e4dc.png " },
          { name: "Indian Basa", brand: "Local", size: "1kg" , img: "https://i.postimg.cc/HkqFtQnB/228456bb1b92b8817582db10d9be1651.png " },
          { name: "Prawns", brand: "Local", size: "1kg" , img: "https://i.postimg.cc/yNnXNHMk/81Fpg1y-NZm-L-AC-UL375-SR375-375.jpg " }
        ]
      }
      
    }
    },
    "Rich Graviss": {
    icon: "🍦",
    img: "https://i.postimg.cc/FFxZW0W7/Gemini-Generated-Image-b0ni9sb0ni9sb0ni.png",
    description: "Professional grade whipping creams and culinary solutions.",
    subcategories: {
      "Culinary & Fresh Creams": {
        products: [
          { name: "Double Dream Fresh Cream", brand: "Rich", size: "1L" , img: " https://i.postimg.cc/PJHSL46r/9415e8107b8e9914f8864a60b0a1b1f5.png" },
          { name: "Versatié Fresh Cream", brand: "Rich", size: "1L", img: "https://i.postimg.cc/Y2JpPmvC/Versatie_Back.webp" },
          { name: "Hot Kitchen Frozen Cream", brand: "Rich", size: "1kg", img: "https://i.postimg.cc/xjkfgP1V/RCRHK_Front.webp" }
        ]
      },
      "Whipping Creams": {
        products: [
          { name: "Sun Whipping Cream", brand: "Rich", size: "1kg" , img: "https://i.postimg.cc/9X4m1BFv/664581c7a90fbb5fc75949f0f7c9b041.png" },
          { name: "Star Whipping Cream", brand: "Rich", size: "1kg", img: "https://i.postimg.cc/MZhWLjvh/Star_Whip_Front.webp"  },
          { name: "Gold Whipping Cream", brand: "Rich", size: "1kg", img: "https://i.postimg.cc/h4JDM0tg/Product_Image1_287d46cf_a4b4_47d3_af68_d182912153d2.webp"  },
          { name: "Better Creme", brand: "Rich", size: "1kg" , img: "https://i.postimg.cc/667Wzh5F/Bettercreme_Front_eb6454b0_ce2c_4eba_acab_386038733d47.webp" }
        ]
      },
      "Truffle & Specialty": {
        products: [
          { name: "Truffle Base", brand: "Rich", size: "2kg", img: "https://i.postimg.cc/X7dV675q/Truffle_Base_Front_4.pnghttps://i.postimg.cc/X7dV675q/Truffle_Base_Front_4.png"  },
          { name: "Premium Truffle", brand: "Rich", size: "2kg" , img: "https://i.postimg.cc/mZ0bnFPf/Truffle_GS_Front.webp" },
          { name: "Cheese Flavoured Topping", brand: "Rich", size: "1kg", img: "https://i.postimg.cc/dQ7sn9tX/Cheese_Whip_Topping_Front.webp"  },
          { name: "Ice Hot All-In-One", brand: "Rich", size: "1kg", img: "https://i.postimg.cc/bYGyLRNF/All_In_One_Front.webp"  }
        ]
      }
    }
  },
 
  
};

export default PRODUCT_DATA;