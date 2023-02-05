import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Burger from "../components/Burger.js";
import { getAllBurgers } from "../actions/burgerActions.js";
import Loading from "../components/Loading.js";
import Error from "../components/Error.js";
import BCarousel from "../components/BCarousel.js";
import { InputGroup } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default function Homescreen() {
  const dispatch = useDispatch();
  const burgerstate = useSelector((state) => state.getAllBurgersReducer);
  const [search, setSearch] = useState("");
  const { burgers, error, loading } = burgerstate;
  useEffect(() => {
    dispatch(getAllBurgers());
  }, [dispatch]);

  return (
    <div>
      <BCarousel />
      <Form className="wrap">
        <InputGroup className="search">
          <Form.Control
            className="searchTerm"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search Burgers"
          />
          <button type="submit" className="searchButton">
            <i className="fa fa-search"></i>
          </button>
        </InputGroup>
      </Form>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something went wrong" />
        ) : (
          burgers
            .filter((bg) => {
              return search.toLowerCase() === ""
                ? bg
                : bg.name.toLowerCase().includes(search);
            })
            .map((burger) => {
              return (
                <div className="col-md-3 m-3" key={burger._id}>
                  <div>
                    <Burger burger={burger} />
                  </div>
                </div>
              );
            })
        )}
      </div>
    </div>
  );
}
