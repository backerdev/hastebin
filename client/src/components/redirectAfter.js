import React, { useState, useEffect } from "react";

import Importer from "../api/apiFunctions.js";
import { useParams, useHistory, Redirect } from "react-router-dom";
const RedirectAfter = () => {
  const params = useParams();
  const history = useHistory();
  const [items, setItems] = useState([]);
  const [datas, setDatas] = useState([]);
  const [counts, setCounts] = useState([]);
  // const id = "61459ec137e4e5cd1e2df02a";

  const getData = async () => {
    let item = await Importer.dataget(params.id);

    if (item) {
      for (let i = 1; i <= item.count; i++) {
        counts.push(i);
        console.log(counts);
      }
    }

    setDatas(item);
  };
  const Edithandler = (e) => {
    e.preventDefault();
    if (params.id) {
      // <Redirect to={`/edit/:${params.id}`} />;
      history.push(`/${params.id}`);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="RedirectPage">
        <div className="counter">
          {counts.map((each) => (
            <span key={each}>{each}</span>
          ))}
        </div>
        {!datas.length ? (
          <>
            <pre>
              <code>{datas["data"]}</code>
            </pre>
          </>
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      <div className="Btns_container">
        <h2>SHAREbin</h2>
        <div className="btns-group">
          <button onClick={Edithandler}>Edit</button>
        </div>
      </div>
    </>
  );
};

export default RedirectAfter;
