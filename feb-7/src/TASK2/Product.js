import React, { Component } from "react";

export default class ProductInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {
        ProductName: "",
        Price: "",
        OfferAmount: "",
        FinalPrice: "",
        SellerName: "",
      },

      storedData: [],
    };
  }

  componentDidMount() {
    let data = JSON.parse(localStorage.getItem("PRODUCT_DATA"));
    if (data)
      this.setState({
        storedData: JSON.parse(localStorage.getItem("PRODUCT_DATA")),
      });
  }

  HandleInputChange = (Ename, Evalue) => {
    this.setState({
      Data: {
        ...this.state.Data,
        [Ename]: Evalue,
      },
    });
  };
  Storeinfo = (e) => {
    e.preventDefault();

    if (JSON.parse(localStorage.getItem("PRODUCT_DATA")) === null) {
      let data = [];
      data.push(this.state.Data);
      localStorage.setItem("PRODUCT_DATA", JSON.stringify(data));
    } else {
      let storedData = JSON.parse(localStorage.getItem("PRODUCT_DATA"));
      storedData.push(this.state.Data);
      localStorage.setItem("PRODUCT_DATA", JSON.stringify(storedData));
      // console.log("ALL", JSON.parse(localStorage.getItem("PRODUCT_DATA")));
    }
    this.setState({
      storedData: JSON.parse(localStorage.getItem("PRODUCT_DATA")),
    });
  };

  render() {
    return (
      <>
        <div style={{ marginLeft: "20px" }}>
          <form type="submit">
            <table style={{ border: "1px solid pink", textAlign: "center" }}>
              <tr>
                <td>
                  <input
                    width="100%"
                    type="text"
                    name="ProductName"
                    placeholder="ProductName"
                    onChange={(e) =>
                      this.HandleInputChange(e.target.name, e.target.value)
                    }
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="Price"
                    placeholder="Price"
                    onChange={(e) => this.HandleInputChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="OfferAmount"
                    placeholder="OfferAmount"
                    onChange={(e) => this.HandleInputChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="FinalPrice"
                    placeholder="FinalPrice"
                    onChange={(e) => this.HandleInputChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="SellerName"
                    placeholder="SellerName"
                    onChange={(e) => this.HandleInputChange(e)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <button onClick={(e) => this.Storeinfo(e)}>Store</button>
                </td>
              </tr>
            </table>
          </form>
        </div>
        <div>
          {this.state.storedData ? (
            <h3 style={{ textAlign: "center" }}>List Of All Product Data</h3>
          ) : (
            ""
          )}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          {/* <div></div> */}

          <div>
            {this.state.storedData !== []
              ? this.state.storedData.map((data) => (
                  <table style={{ border: "1px solid black", margin: "10px" }}>
                    <td style={{ border: "1px solid black", padding: "6px" }}>
                      ProductName
                    </td>
                    <td style={{ border: "1px solid black", padding: "6px" }}>
                      Price
                    </td>
                    <td
                      style={{
                        border: "1px solid black",
                        padding: "6px",
                        textAlign: "center",
                      }}
                    >
                      OfferAmount
                    </td>
                    <td style={{ border: "1px solid black", padding: "6px" }}>
                      FinalPrice
                    </td>
                    <td style={{ border: "1px solid black", padding: "6px" }}>
                      SellerName
                    </td>

                    <tr>
                      <td
                        style={{ border: "1px solid black", padding: "6px" }}
                        key={data}
                      >
                        {data.ProductName}
                      </td>

                      <td style={{ border: "1px solid black", padding: "6px" }}>
                        {data.Price}
                      </td>

                      <td style={{ border: "1px solid black", padding: "6px" }}>
                        {data.OfferAmount}
                      </td>
                      <td style={{ border: "1px solid black", padding: "6px" }}>
                        {data.FinalPrice}
                      </td>

                      <td style={{ border: "1px solid black", padding: "6px" }}>
                        {data.SellerName}
                      </td>
                    </tr>
                  </table>
                ))
              : ""}
          </div>
        </div>
      </>
    );
  }
}
