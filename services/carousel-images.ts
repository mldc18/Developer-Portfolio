import { AlmedahImages, BoffiImages } from "../definitions/carousel-images";

export async function getBoffiImages() {
  return await JSON.parse(BoffiImages);
}

export async function getAlmedahImages() {
  return await JSON.parse(AlmedahImages);
}
