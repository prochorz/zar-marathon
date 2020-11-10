const importAll = (r: any) => {
  const images: any = {};
  r.keys().forEach((item: any) => {
    images[item.replace('./', '').replace(/\.(svg)$/, '')] = r(item).default;
  });
  return images;
};

export const dynamicIcons = importAll(
  (require as any).context('!@svgr/webpack!../../../assets/svg', false, /\.(svg)$/),
);
