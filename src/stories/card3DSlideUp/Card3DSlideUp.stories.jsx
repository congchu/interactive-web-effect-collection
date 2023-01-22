import React from "react";

import { Card3DSlideUp } from "./Card3DSlideUp";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Card/Card3D/SlideUp",
  component: Card3DSlideUp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div
    style={{
      padding: "50px",
      width: "300px",

      marginTop: "250px",
    }}
  >
    <Card3DSlideUp {...args} />
  </div>
);

export const Sample1 = Template.bind({});
Sample1.args = {
  primary: true,
  coverImage:
    "https://jeongkoo-assets.s3.ap-northeast-2.amazonaws.com/interfactive-web/images/Card3D-cover.png",
  titleImage:
    "https://jeongkoo-assets.s3.ap-northeast-2.amazonaws.com/interfactive-web/images/Card3D-title.png",
  upperImage:
    "https://jeongkoo-assets.s3.ap-northeast-2.amazonaws.com/interfactive-web/images/Card3D-upper.png",
};

export const Sample2 = Template.bind({});
Sample2.args = {
  primary: true,
  coverImage:
    "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
  titleImage:
    "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
  upperImage:
    "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp",
};
