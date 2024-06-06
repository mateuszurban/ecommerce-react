import { useParams } from "react-router-dom";
import { FilterMenu } from "../components/FilterMenu";
import { ProductsDisplay } from "../components/ProductsDisplay";

export function CategoryProducts() {
  const params = useParams();
  const chosenCategory = params.categoryId;
  return (
    <>
      <FilterMenu />
      <ProductsDisplay categoryToDisplay={chosenCategory} />
    </>
  );
}
