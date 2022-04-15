import React from "react";
import { useState } from "react";
import searchIcon from "../../assets/icn_search 1.svg";
import noItemIcon from "../../assets/icn_noItem.svg";
import ItemStorage from "../../utils/ItemStorage";
import ItemsNavBar from "../../components/ItemsNavBar/ItemsNavBar";

import styles from "./Items.module.css";

export default function Items() {
  const { storeItems, itemsList } = ItemStorage();
  const [selectedItem, setSelectedItem] = useState({});
  const defaultData = {
    itemName: "",
    itemCode: "",
    sellPrice: "",
    purchasePrice: "",
    unit: "none",
    date: "",
  };
  const [formData, setFormData] = useState(defaultData);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);

    console.log(selectedItem?.length);

    if (selectedItem.length === 0 || selectedItem.constructor === Object) {
      if (itemsList) {
        const newItems = [...itemsList, formData];
        storeItems(newItems);
      } else {
        storeItems([formData]);
      }
    } else {
      const newItems = itemsList?.filter((item) => selectedItem !== item);
      storeItems([...newItems, formData]);
    }

    setFormData({});
    setSelectedItem({});
    window.location.reload(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  function search() {
    var input = document.getElementById("search");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("table");
    var tr = table.getElementsByTagName("tr");
    for (var i = 0; i < tr.length; i++) {
      var td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        var txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  }

  return (
    <>
      <ItemsNavBar />
      <div className={styles["container"]}>
        <div className={styles["itemList"]}>
          <h4>Items</h4>
          <div className={styles["itemsListContainer"]}>
            <div className={styles["searchContainer"]}>
              <img src={searchIcon} alt="icon" />
              <input
                div
                className={styles["input"]}
                id="search"
                placeholder={"Search Items"}
                style={{ paddingLeft: "40px", width: "max-content" }}
                onKeyUp={() => {
                  search();
                }}
              />
            </div>
            <table className={styles["tableItems"]} id="table">
              <thead>
                <tr>
                  <th>ITEM NAME</th>
                  <th>ITEM CODE</th>
                  <th>SELLING PRICE</th>
                  <th>PURCHASE PRICE</th>
                  <th>UNIT</th>
                  <th>DATE</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {itemsList && itemsList.length > 0 ? (
                  itemsList.map((i, key) => {
                    return (
                      <>
                        <tr
                          key={key}
                          onClick={() => {
                            setSelectedItem(i);
                            setFormData(i);
                          }}
                        >
                          <td>{i.itemName}</td>
                          <td>{i.itemCode}</td>
                          <td>{i.sellPrice ? i.sellPrice : "-"}</td>
                          <td>{i.purchasePrice ? i.purchasePrice : "-"}</td>
                          <td>{i.unit !== "none" ? i.unit : "-"}</td>
                          <td>{i.date ? i.date : "-"}</td>
                        </tr>
                      </>
                    );
                  })
                ) : (
                  <></>
                )}
              </tbody>
            </table>
            {!itemsList && (
              <div className={styles["noDataIcon"]}>
                <img src={noItemIcon} alt="icon" />
                <p style={{ color: "#6976d9" }}>
                  You do not have any data to display
                </p>
              </div>
            )}
          </div>
        </div>

        <div className={styles["itemCreate"]}>
          <h4>Create/Edit Items</h4>
          <div className={styles["createItemContainer"]}>
            <form className={styles["form"]} onSubmit={handleSubmit}>
              <div className={styles["itemNameCode"]}>
                <label className={styles["label"]}>
                  <p style={{ color: "#6976d9" }}>Item Name*</p>
                  <input
                    className={styles["input"]}
                    required
                    type="text"
                    name="itemName"
                    value={formData?.itemName}
                    placeholder="Enter Item Name"
                    onChange={handleChange}
                  />
                </label>
                <label className={styles["label"]}>
                  <p style={{ color: "#6976d9" }}>Item Code</p>
                  <input
                    className={styles["input"]}
                    required
                    value={formData?.itemCode}
                    type="text"
                    name="itemCode"
                    placeholder="Enter Item Code"
                    onChange={handleChange}
                  />
                </label>
              </div>

              <h3>Stock & Pricing details (Optional)</h3>

              <div className={styles["itemNameCode"]}>
                <label className={styles["label"]}>
                  <p style={{ color: "#6976d9" }}>Sales Price</p>
                  <input
                    className={styles["input"]}
                    type="text"
                    name="sellPrice"
                    value={formData?.sellPrice}
                    placeholder="₹ 0"
                    onChange={handleChange}
                  />
                </label>
                <label className={styles["label"]}>
                  <p style={{ color: "#6976d9" }}>Purchase Price</p>
                  <input
                    className={styles["input"]}
                    type="text"
                    name="purchasePrice"
                    value={formData?.purchasePrice}
                    placeholder="₹ 0"
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className={styles["itemNameCode"]}>
                <label className={styles["label"]}>
                  <p style={{ color: "#6976d9" }}>Measuring UNIT</p>
                  <select
                    className={styles["select"]}
                    name="unit"
                    value={formData?.unit}
                    placeholder="Select Unit"
                    onChange={handleChange}
                  >
                    <option value="none">Select Unit</option>
                    <option value="pcs">pcs</option>
                    <option value="boxes">boxes</option>
                    <option value="gms">gms</option>
                    <option value="kgs">kgs</option>
                    <option value="lts">lts</option>
                  </select>
                </label>
                <label className={styles["label"]}>
                  <p style={{ color: "#6976d9" }}>Opening Stock Date</p>
                  <input
                    className={styles["inputDate"]}
                    type="text"
                    onFocus={(e) => (e.currentTarget.type = "date")}
                    onBlur={(e) => (e.currentTarget.type = "text")}
                    placeholder="Select Date"
                    name="date"
                    value={formData?.date || ""}
                    onChange={handleChange}
                  />
                </label>
              </div>

              <div className={styles["saveItemButton"]}>
                <input
                  className={styles["submitInput"]}
                  type="submit"
                  value={"Save"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
