import Data from './data.json'
import './App.css';

function App() {
  let arr = [];
  let arr2 = [];
  let arr3 = [];
  for (let i = 0; i < Data.proformaItem.length; i++ ) {
    let obj = Data.proformaItem[i].product_stock;
    obj = JSON.parse(obj)
    let pTag1 = obj.map((stok) => {
      return stok["1"];
    });
    let pTag3 = obj.map((stok) => {
      return stok["3"];
    });
    let pTag5 = obj.map((stok) => {
      return stok["5"];
    });
    arr.push(
      <div className="produkStock"> 
        <p className="produkId"> {pTag1} </p>
      </div>
    )
    arr2.push(
      <div className="produkStock"> 
        <p className="produkId"> {pTag3} </p>
      </div>
    )
    arr3.push(
      <div className="produkStock">
        <p className="produkId"> {pTag5} </p>
      </div>
    )
  }

  let location = Data.location
  const data = Data.proformaItem
  // const obj = JSON.parse(data2)
  // console.log(obj, "ini stok")

  // // console.log(obj[1]["3"], "produk stok")
  return (
    <div className="wrapperProduk">
      <div className="produkDisplay">
        <div className="lokasiTable">
          <div className="lokasiId">
          {location.map((map) => (
            <div>
            <p > {map.name} </p>
          </div>
        ))}
          </div>
          <div className="produkStockId">
            <p>{arr}</p>
            <p>{arr2}</p>
            <p>{arr3}</p>
          </div>
        </div>
        

        <div className="category">
        <p className="categoryTitle">Category</p>
        {data.map((category) => (
          <div>
            <p className="categoryList"> {category.categoryDescription}  </p>
          </div>
        ))}
        </div>

      <div className="Product">
        <p className="productTittle">Product</p>
        {data.map((produk) => (
          <div>
            <p className="productList"> {produk.productDescription}  </p>
          </div>
        ))}
      </div>

      <div className="Stock">
        <p className="stockTitle">Total Stock</p>
      </div>

      <div className="Persent">
        <p className="persenTitle">Persent</p>
      </div>

      <div className="Order">
        <p className="orderTitle">Total Order</p>
      </div>
      </div>
      
    </div>
  );
}

export default App;
