import { FilterValues, Product } from "../../pages/ProductList/ProductList";
import { useEffect, useState } from "react";
import styles from "./Filter.module.css";

import { MdOutlineArrowDropDown } from "react-icons/md";

type FilterProps = {
  products: Product[];
  onFilter: (valuesToFilter: FilterValues) => void;
};

const Filter = ({ products, onFilter }: FilterProps) => {
  const [brands, setBrands] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [checkedBrands, setCheckedBrands] = useState<string[]>([]);
  const [checkedCategories, setCheckedCategories] = useState<string[]>([]);
  const [showBrands, setShowBrands] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const uniqueBrands = Array.from(
      new Set(products.map((product) => product.product_brand))
    );
    const uniqueCategories = Array.from(
      new Set(products.map((product) => product.product_category))
    );
    setBrands(uniqueBrands);
    setCategories(uniqueCategories);
  }, [products]);

  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brand = event.target.value;
    const isChecked = event.target.checked;
    let updatedCheckedBrands;

    if (isChecked) {
      updatedCheckedBrands = [...checkedBrands, brand];
    } else {
      updatedCheckedBrands = checkedBrands.filter(
        (brandToRemove) => brandToRemove !== brand
      );
    }

    setCheckedBrands(updatedCheckedBrands);
    onFilter({ brand: updatedCheckedBrands, category: checkedCategories });
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const category = event.target.value;
    const isChecked = event.target.checked;
    let updatedCheckedCategories;

    if (isChecked) {
      updatedCheckedCategories = [...checkedCategories, category];
    } else {
      updatedCheckedCategories = checkedCategories.filter(
        (categoryToRemove) => categoryToRemove !== category
      );
    }

    setCheckedCategories(updatedCheckedCategories);
    onFilter({ brand: checkedBrands, category: updatedCheckedCategories });
  };

  return (
    <div className={styles.filter}>
      <div className={styles.brandsFilter}>
        <div
          onClick={() => setShowBrands(!showBrands)}
          className={styles.categoryNameWrapper}
        >
          <h6 className={styles.categoryName}>Brands</h6>
          <MdOutlineArrowDropDown
            className={`${styles.arrowIcon} ${showBrands ? styles.open : ""}`}
          />
        </div>
        {showBrands &&
          brands.map((brand) => (
            <label key={brand}>
              <input
                type="checkbox"
                value={brand}
                checked={checkedBrands.includes(brand)}
                onChange={handleBrandChange}
              />
              <span className={styles.filterValue}>{brand}</span>
            </label>
          ))}
      </div>
      <div className={styles.categoriesFilter}>
        <div
          onClick={() => setShowCategories(!showCategories)}
          className={styles.categoryNameWrapper}
        >
          <h6 className={styles.categoryName}>Categories</h6>
          <MdOutlineArrowDropDown
            className={`${styles.arrowIcon} ${
              showCategories ? styles.open : ""
            }`}
          />
        </div>
        {showCategories &&
          categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                checked={checkedCategories.includes(category)}
                onChange={handleCategoryChange}
              />
              <span className={styles.filterValue}>{category}</span>
            </label>
          ))}
      </div>
    </div>
  );
};

export default Filter;


