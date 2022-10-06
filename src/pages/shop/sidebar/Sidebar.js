import classes from "./Sidebar.module.scss";

const Sidebar = (props) => {
  const categories = ["Chairs", "Sofas", "Lights"];
  const materials = ["Metal", "Plastic", "Plywood", "Wood", "Wool"];
    const handleChange = (e, setFunc, cat) => {
        if(e.target.checked) {
            setFunc([...cat, e.target.value]);
        } else {
            setFunc(cat.filter (id => id !== e.target.value))
        }
    }
  return (
    <div className={classes["sidebar"]}>
      <span className={classes["sidebar__title"]}>Filter</span>
      <form className={classes["sidebar__form"]}>
        <div className={classes["sidebar__filter"]}>
          {!props.slugName ? <span className={classes["sidebar__filter-title"]}>Category</span>: null}
          {!props.slugName ? categories.map((category, i) => (
            <div key={i} className={classes["sidebar__filter-container"]}>
              <input
                className={classes["sidebar__filter-input"]}
                type="checkbox"
                value={category}
                id={`radio-c${i}`}
                onChange={(e) => handleChange(e, props.setCategory, props.category)}
                key={`radio-c${i}`}
              />
              <label
                className={classes["sidebar__filter-label"]}
                htmlFor={`radio-c${i}`}
                key={`radio-c${i}1`}
              >
                <span>{category}</span>
              </label>
            </div>
          )) : null}
        </div>
        <div className={classes["sidebar__filter"]}>
          <span className={classes["sidebar__filter-title"]}>Price range</span>
          <div className={classes["sidebar__filter-container"]}>
            <input
              className={classes["sidebar__filter-number"]}
              type="number"
              min="0"
              max="1200"
              id="price"
              name="price"
              onChange={(e) => props.setPriceMin(e.target.value)}
            />
            <span className={classes["sidebar__filter-number--dash"]}>&#8212;</span>
            <input
              className={classes["sidebar__filter-number"]}
              type="number"
              min="100"
              max="1200"
              id="price"
              name="price"
              onChange={(e) => props.setPriceMax(e.target.value)}
            />
          </div>
        </div>
        <div className={classes["sideba__filter"]}>
          <span className={classes["sidebar__filter-title"]}>Materials</span>
          {materials.map((material, i) => (
            <div key={i}  className={classes["sidebar__filter-container"]}>
              <input
                className={classes["sidebar__filter-input"]}
                type="checkbox"
                value={material}
                id={`radio-m${i}`}
                key={`radio-m${i}`}
                onChange={(e) => handleChange(e, props.setMaterials, props.materials)}
              />
              <label
                className={classes["sidebar__filter-label"]}
                htmlFor={`radio-m${i}`}
                key={`radio-m${i}1`}
              >
                <span>{material}</span>
              </label>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Sidebar;