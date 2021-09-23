import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import Importer from "../api/apiFunctions.js";

const LandingPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const [data, setData] = useState(``);
  const [arrayCounts, setArrayCounts] = useState([]);
  const [count, setCount] = useState(1);

  const handleChange = (e) => {
    setData(e.target.value);
    console.log(data.split(/\r|\r\n|\n/).length);
    handelEnter(data);
    if (!arrayCounts.includes(count)) {
      arrayCounts.push(count);
    }
    if (arrayCounts.length > data.split(/\r|\r\n|\n/).length) {
      arrayCounts.splice(data.split(/\r|\r\n|\n/).length, arrayCounts.length);
      console.log(arrayCounts);
    }
  };
  const handelEnter = (data) => {
    const enters = data.split(/\r|\r\n|\n/);
    setCount(parseInt(enters.length));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = await Importer.dataPost(data, count);

    history.push(`/share/${id.data}`);

    setData(``);
  };
  const handleEdit = async (e) => {
    e.preventDefault();

    const newData = await Importer.updateData(id, data, count);
    console.log(id);
    history.push(`/share/${id}`);

    setData(``);
  };
  const handleDelete = async (e) => {
    Importer.deleteData(id);

    history.push("/");

    setData(``);
  };
  const getData = async () => {
    const { data, count } = await Importer.dataget(id);
    if (count) {
      for (let i = 1; i <= count; i++) {
        arrayCounts.push(i);
        console.log(arrayCounts);
      }
    }
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="landingPage">
        <form>
          <div className="counter">
            {arrayCounts.map((arrayCount, i) => (
              <span key={i}>{arrayCount}</span>
            ))}
          </div>
          {id ? (
            <textarea
              className="landingPage_textarea"
              value={data}
              onChange={handleChange}
            />
          ) : (
            <textarea
              className="landingPage_textarea"
              value={data}
              onChange={handleChange}
              placeholder="Hello Everyone,
                This is my first Clone"
            />
          )}
        </form>
      </div>
      <div className="Btns_container">
        <h2>SHAREbin</h2>
        <div>
          {id ? (
            <div className="btns-group">
              <button onClick={handleEdit}>SAVE EDITED</button>
              <button onClick={handleDelete}>DELETE</button>
            </div>
          ) : (
            <button onClick={handleSubmit}>SHARE</button>
          )}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
