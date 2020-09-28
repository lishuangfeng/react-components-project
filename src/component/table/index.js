import React from "react";
import styles from "./index.module.scss";

const Table = (props) => {
const{data, columns, checkItem} = props;
let indexList = [];
 
  // const checkItem = (obj, item) => {
  //   item.checked = obj.target.checked;
  //   const list = data.filter(
  //     (checkedItem) => checkedItem.checked === true
  //   );
  //   window.console.log("选择",list)
  //   setCheckList(list);
  // };

  for (let key in data[0]) {
    if(key !== "key") {
      indexList = indexList.concat([key]);
    }
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.column}>
            {columns.map((item) => (
              <th key={item.dataIndex}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.key} className={styles.row}>
              <td>
                <input
                  type="checkbox"
                  onChange={e => checkItem(e, item)}
                  className={styles.checkbox}
                  disabled={item.disabled}
                />
              </td>
              {indexList.map((child, index) => (
                <td key={`${item.key}-${index}`}>{item[child]}</td>
              ))}
              <td>
                {columns.map((col) => (
                  col.render && col.render(item)
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;


