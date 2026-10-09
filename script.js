
const fruitData = [
    {
        name: "苹果 🍎",
        items: [
            ["红富士苹果", 8.8, "脆甜多汁，果香浓郁", "apple"],
            ["阿克苏苹果", 12.8, "清甜爽脆，果肉细腻", "apple"],
            ["青苹果", 9.8, "清爽微酸，口感清脆", "apple"],
            ["嘎啦苹果", 7.5, "酸甜可口，果肉细嫩", "apple"]
        ]
    },
    {
        name: "香蕉 🍌",
        items: [
            ["海南小米蕉", 9.9, "香甜软糯", "banana"],
            ["进口皇帝蕉", 12.8, "香气浓郁", "banana"],
            ["高山香蕉", 7.8, "绵密细腻", "banana"]
        ]
    },
    {
        name: "橙子 🍊",
        items: [
            ["赣南脐橙", 12.8, "汁水丰富，酸甜平衡", "orange"],
            ["冰糖橙", 9.9, "清甜爽口", "orange"],
            ["甜橙", 16.8, "果香清新", "orange"]
        ]
    },
    {
        name: "草莓 🍓",
        items: [
            ["奶油草莓", 26.8, "香气浓郁，甜润细腻", "strawberry"],
            ["红颜草莓", 32, "果肉饱满", "strawberry"],
            ["巧克力草莓", 35.8, "风味独特", "strawberry"]
        ]
    },
    {
        name: "葡萄 🍇",
        items: [
            ["阳光玫瑰", 28.8, "清甜爽脆", "grapes"],
            ["巨峰葡萄", 16.8, "酸甜多汁", "grapes"],
            ["夏黑葡萄", 18.8, "无籽爽口", "grapes"]
        ]
    },
    {
        name: "西瓜 🍉",
        items: [
            ["麒麟西瓜", 3.8, "清甜多汁", "watermelon"],
            ["黑美人西瓜", 2.8, "瓜瓤鲜红", "watermelon"],
            ["无籽西瓜", 4.8, "清甜方便", "watermelon"]
        ]
    },
    {
        name: "芒果 🥭",
        items: [
            ["贵妃芒", 16.8, "香甜浓郁", "mango"],
            ["金煌芒果", 13.8, "果肉饱满", "mango"],
            ["小台农芒", 12.8, "软糯可口", "mango"]
        ]
    },
    {
        name: "菠萝 🍍",
        items: [
            ["凤梨", 12.8, "甜酸适中", "pineapple"],
            ["金钻菠萝", 9.9, "香甜少酸", "pineapple"],
            ["手撕菠萝", 15.8, "果肉细嫩", "pineapple"]
        ]
    },
    {
        name: "柠檬 🍋",
        items: [
            ["香水柠檬", 12.8, "清新柠香", "lemon"],
            ["黄柠檬", 9.9, "酸香清爽", "lemon"],
            ["青柠", 13.8, "香气鲜活", "lemon"]
        ]
    },
    {
        name: "梨 🍐",
        items: [
            ["秋月梨", 13.8, "清甜多汁", "pear"],
            ["皇冠梨", 8.8, "口感爽脆", "pear"],
            ["雪花梨", 7.8, "果肉细嫩", "pear"]
        ]
    },
    {
        name: "猕猴桃 🥝",
        items: [
            ["徐香猕猴桃", 15.8, "酸甜可口", "kiwi"],
            ["红心猕猴桃", 22.8, "甜润细腻", "kiwi"],
            ["黄心猕猴桃", 25.8, "口感顺滑", "kiwi"]
        ]
    },
    {
        name: "桃子 🍑",
        items: [
            ["水蜜桃", 18.8, "香甜柔嫩", "peach"],
            ["油桃", 12.8, "甜脆可口", "peach"],
            ["黄桃", 14.8, "香甜软糯", "peach"]
        ]
    },
    {
        name: "樱桃 🍒",
        items: [
            ["智利车厘子", 58, "果肉饱满", "cherry"],
            ["国产大樱桃", 39.8, "酸甜可口", "cherry"],
            ["美早樱桃", 48.8, "肉厚核小", "cherry"]
        ]
    },
    {
        name: "蓝莓 💙",
        items: [
            ["鲜食蓝莓", 26.8, "酸甜清新", "blueberry"],
            ["大果蓝莓", 35.8, "果香浓郁", "blueberry"],
            ["有机蓝莓", 39.8, "小巧鲜美", "blueberry"]
        ]
    },
    {
        name: "牛油果 💚",
        items: [
            ["墨西哥牛油果", 16.8, "口感绵密", "avocado"],
            ["即食牛油果", 19.8, "成熟适中", "avocado"],
            ["大果牛油果", 22.8, "果肉丰厚", "avocado"]
        ]
    }
];

const fruitPhotos = {
    apple: "photo-1560806887-1e4cd0b6cbd6",
    banana: "photo-1571771894821-ce9b6c11b08e",
    orange: "photo-1547514701-42782101795e",
    strawberry: "photo-1464965911861-746a04b4bca6",
    grapes: "photo-1537640538966-79f369143f8f",
    watermelon: "photo-1587049352851-8d4e89133924",
    mango: "photo-1553279768-865429fa0078",
    pineapple: "photo-1550258987-190a2d41a8ba",
    lemon: "photo-1590502593747-42a996133562",
    pear: "photo-1514756331096-242fdeb70d4a",
    kiwi: "photo-1618897996318-5a901fa6ca71",
    peach: "photo-1629828874514-c1e5103e6e5a",
    cherry: "photo-1528825871115-3581a5387919",
    blueberry: "photo-1498557850523-fd3d118b962e",
    avocado: "photo-1523049673857-eb18f1d7b578"
};

let currentCategory = -1;
let cart = {};

function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById(pageId).classList.remove("hidden");

    document.getElementById("cartBar").classList.toggle(
        "hidden",
        pageId !== "shop"
    );

    document.getElementById("cartPanel").classList.add("hidden");

    window.scrollTo(0, 0);
}

function openShop(mode) {
    showPage("shop");

    document.getElementById("shopMode").textContent = mode;

    currentCategory = -1;

    document.getElementById("categoryTitle").textContent =
        "请选择你要买的水果类别";

    document.getElementById("products").innerHTML =
        '<p class="empty">🍎　🍊　🍇<br><br>请选择你要买的水果类别</p>';

    renderCategories();
}

function renderCategories() {
    const container = document.getElementById("categories");

    container.innerHTML = "";

    fruitData.forEach((fruit, index) => {
        const button = document.createElement("button");

        button.className = "category";

        if (index === currentCategory) {
            button.classList.add("active");
        }

        button.textContent = fruit.name;

        button.onclick = () => selectCategory(index);

        container.appendChild(button);
    });
}

function selectCategory(index) {
    currentCategory = index;

    document.getElementById("categoryTitle").textContent =
        fruitData[index].name + " · 今日精选";

    renderCategories();

    const container = document.getElementById("products");

    container.innerHTML = "";

    fruitData[index].items.forEach((item, itemIndex) => {
        const [name, price, description, photo] = item;

        const id = index + "-" + itemIndex;

        const card = document.createElement("article");

        card.className = "product";

        const img = document.createElement("img");

        img.src = "https://images.unsplash.com/" +
            fruitPhotos[photo] +
            "?auto=format&fit=crop&w=500&q=80";

        img.alt = name;

        img.onerror = function () {
            this.onerror = null;
            this.src =
                "https://placehold.co/400x300/e9f8e7/47736a?text=Fresh+Fruit";
        };

        const info = document.createElement("div");

        info.className = "product-info";

        const title = document.createElement("h3");
        title.textContent = name;

        const desc = document.createElement("p");
        desc.className = "description";
        desc.textContent = description;

        const priceText = document.createElement("div");
        priceText.className = "price";
        priceText.textContent = "¥" + price.toFixed(2) + " / 斤";

        const addButton = document.createElement("button");
        addButton.className = "add-button";
        addButton.textContent = "＋ 加入购物车";

        addButton.onclick = () => addToCart(id, name, price);

        info.append(title, desc, priceText, addButton);
        card.append(img, info);

        container.appendChild(card);
    });
}

function addToCart(id, name, price) {
    if (!cart[id]) {
        cart[id] = {
            name: name,
            price: price,
            quantity: 0
        };
    }

    cart[id].quantity++;

    updateCart();
}

function updateCart() {
    const items = Object.values(cart);

    const count = items.reduce(
        (sum, item) => sum + item.quantity, 0
    );

    const total = items.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    );

    document.getElementById("cartCount").textContent = count;

    document.getElementById("cartTotal").textContent =
        "¥" + total.toFixed(2);

    const container = document.getElementById("cartItems");

    container.innerHTML = "";

    if (items.length === 0) {
        container.textContent = "购物车还是空的，快去挑选水果吧！";
        return;
    }

    Object.entries(cart).forEach(([id, item]) => {
        const row = document.createElement("div");

        row.className = "cart-item";

        const info = document.createElement("span");

        info.textContent =
            item.name + "　¥" + item.price.toFixed(2) +
            " × " + item.quantity + "斤";

        const controls = document.createElement("span");

        const minus = document.createElement("button");
        minus.textContent = "−";

        minus.onclick = () => changeQuantity(id, -1);

        const plus = document.createElement("button");
        plus.textContent = "＋";

        plus.onclick = () => changeQuantity(id, 1);

        controls.append(minus, plus);
        row.append(info, controls);

        container.appendChild(row);
    });
}

function changeQuantity(id, amount) {
    if (!cart[id]) return;

    cart[id].quantity += amount;

    if (cart[id].quantity <= 0) {
        delete cart[id];
    }

    updateCart();

    if (currentCategory >= 0) {
        selectCategory(currentCategory);
    }
}

function toggleCart() {
    document.getElementById("cartPanel").classList.toggle("hidden");
}

function maintenance() {
    document.getElementById("maintenanceBox").classList.remove("hidden");
}

function closeMaintenance() {
    document.getElementById("maintenanceBox").classList.add("hidden");
}

renderCategories();
updateCart();
