import "./AssetTracker.css";
export default function orderFlow(statusCode) {
  switch (statusCode) {
    /* 1: Packed 2:  <span className="shipped">Shipped</span> 3: In <span className="out-for-delivery">Out for Delivery</span> 4: <span className="delivered">Delivered</span>/Received */
    case 1:
      return (
        <ul id="progressbar">
          {/* <li className={`${classes["step0"]} ${classes["active"]}`} id="step1"> */}
          <li className="step0 active" id="step1">
            Packed
          </li>
          <li className="step0  text-center" id="step2">
            <span className="shipped">Shipped</span>
          </li>
          <li className="step0  text-right" id="step3">
            <span className="out-for-delivery">Out for Delivery</span>
          </li>
          <li className="step0 text-right" id="step4">
            <span className="delivered">Delivered</span>
          </li>
        </ul>
      );

    //   break;
    case 2:
      return (
        <ul id="progressbar">
          <li className="step0 active " id="step1">
            Packed
          </li>
          <li className="step0 active text-center" id="step2">
            <span className="shipped">Shipped</span>
          </li>
          <li className="step0  text-right" id="step3">
            <span className="out-for-delivery">Out for Delivery</span>
          </li>
          <li className="step0 text-right" id="step4">
            <span className="delivered">Delivered</span>
          </li>
        </ul>
      );

    //   break;
    case 3:
      return (
        <ul id="progressbar">
          <li className="step0 active " id="step1">
            Packed
          </li>
          <li className="step0 active text-center" id="step2">
            <span className="shipped">Shipped</span>
          </li>
          <li className="step0 active text-right" id="step3">
            <span className="out-for-delivery">Out for Delivery</span>
          </li>
          <li className="step0 text-right" id="step4">
            <span className="delivered">Delivered</span>
          </li>
        </ul>
      );

    //   break;
    case 4:
      return (
        <ul id="progressbar">
          <li className="step0 active " id="step1">
            Packed
          </li>
          <li className="step0 active text-center" id="step2">
            <span className="shipped">Shipped</span>
          </li>
          <li className="step0 active text-right" id="step3">
            <span className="out-for-delivery">Out for Delivery</span>
          </li>
          <li className="step0 active text-right" id="step4">
            <span className="delivered">Delivered</span>
          </li>
        </ul>
      );

    //   break;

    default:
      return (
        <ul id="progressbar">
          <li className="step0  " id="step1">
            Packed
          </li>
          <li className="step0  text-center" id="step2">
            <span className="shipped">Shipped</span>
          </li>
          <li className="step0  text-right" id="step3">
            <span className="out-for-delivery">Out for Delivery</span>
          </li>
          <li className="step0 text-right" id="step4">
            <span className="delivered">Delivered</span>
          </li>
        </ul>
      );
    //   break;
  }
}
