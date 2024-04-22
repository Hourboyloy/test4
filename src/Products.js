import { items } from "./items";

function Products() {
  return (
    <div>
      <h1 className="text-xl text-gray-900">Products</h1>
      {items.map((item, i) => (
        <a href="#" key={item + "_" + i}>
          <ul className="flex items-center space-x-2 p-3 hover:text-purple-600">
            <li>Name: {item.name} </li>
            <li>Price: {item.price}</li>
          </ul>
        </a>
      ))}

      {/*use Outlet here*/}
    </div>
  );
}

export default Products;
