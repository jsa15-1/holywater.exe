// Tạo 1 mảng products để chứa các tên sản phẩm, ban đầu mảng products sẽ là 1 mảng rỗng

// - viết 1 hàm showProduct thực hiện chức năng show ra tất cả các sản phẩm trong mảng
 
// - kiểm tra xem mảng product có phải là mảng rỗng hay không
//   - nếu là mảng rỗng log ra "không có sản phẩm để hiển thị"
//   - nếu mảng có dữ liệu thì log ra tất cả tên sản phẩm trong mảng

// - viết 1 hàm addProduct để thực hiện việc thêm sản phẩm
//   - tên sản phẩm nhập vào từ bàn phím
//   - kiểm tra nếu tên sản phẩm nhỏ hơn 5 ký tự thì bắt nhập lại
//   - nếu dữ liệu nhập vào hợp lệ thì cho phép thêm vào mảng products

// - viết 1 hàm detailProduct thực hiện công việc show ra chi tiết của sản phẩm đó khi bấm vào

//thực hiện bằng arrow function và sử dụng destructuring trong đó

var products = {
    "VSCode": {
        "name": "Visual Studio Code",
        "developer": "Microsoft",
        "price": "Free",
        "Source": "Open"
    }
}

const showProduct =()=>{
    for(product in products) {
        let {name, developer, price, Source} = products[product]
        console.log("Name:", name, "\n", "Developer:", developer, "\n", "Price:", price, "\n", "Source:", Source)
    }
}

const addProduct = () => {
    let productName = document.getElementById('productName').value;
    let developer = document.getElementById('productDev').value;
    let price = document.getElementById('productPrice').value;
    let source = document.getElementById('productSource').value;
    if (productName.length < 5) {
        alert("ur ghey!"); return;
    } else {
        products[productName] = {
            name: productName,
            developer: developer,
            price: price,
            Source: source
        };
    };
};
  

const detailProduct =()=> {
    let product = products[document.getElementById('productName').value];
    if (product) {
        console.log("Name: " + product.name);
        console.log("Developer: " + product.developer);
        console.log("Price: " + product.price);
        console.log("Open Source: " + product.Source);
    } else {
        console.log("Product not found.")
    }
}

console.clear()
console.error("Omg You're Gay!")