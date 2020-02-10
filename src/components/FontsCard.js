import React from "react";
import LazyLoad from "react-lazyload";

import styled from "styled-components";
import Card from "./Card";

// === COMPONENT === \\
const FontsCard = ({ ...props }) => {
  const fontRegex = new RegExp(props.searchValue, "i");
  const fontFilter = props.fontsObject.filter(font =>
    font.family.match(fontRegex)
  );
  return (
    <Wrap className="cardWrap">
      {props.searchValue.length === 0 ? (
        props.fontsObject.map((font, index) => {
          return (
            <LazyLoad height={150} once key={index}>
              <Card
                key={index}
                font={font}
                index={index}
                searchValue={props.searchValue}
                typeValue={props.typeValue}
                fontsObject={props.fontsObject}
              />
            </LazyLoad>
          );
        })
      ) : fontFilter.length ? (
        fontFilter.map((font, index) => {
          return (
            <LazyLoad height={150} once key={index}>
              <Card
                font={font}
                index={index}
                searchValue={props.searchValue}
                typeValue={props.typeValue}
                fontsObject={props.fontsObject}
              />
            </LazyLoad>
          );
        })
      ) : (
        <div>Not Found</div>
      )}
    </Wrap>
  );
};

//* styled-component < 💅>
const Wrap = styled.main``;

export default FontsCard;
