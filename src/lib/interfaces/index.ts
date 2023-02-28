export type Post = {
  id: string;
  name: string;
  title: string;
  subTitle: string;
  image1: string;
  listTitle: string;
  listItems: [
    { id: number; itemTitles: string },
    { id: number; itemTitles: string },
    { id: number; itemTitles: string },
    { id: number; itemTitles: string },
    { id: number; itemTitles: string },
    { id: number; itemTitles: string },
    { id: number; itemTitles: string },
  ];
  opisZabiegu: string;
  opisTitle: string;
  opisContent1: string;
  opisContent2: string;
  opisContent3: string;
  opisContent4: string;
  opisContent5: string;
  opisTitle2: string;
  opisContent6: string;
  opisContent7: string;
  wkazaniaZabiegu: string;
  image2: string;
};

export type ResponseError = {
  message: string;
};
export type User = {
  id: number;
  name: string;
  image: string;
  description: string;
  description2: string;
  itemsList: [
    {
      id: number | string;
      title: string;
      title2: string;
      title3: string;
      title4: string;
      title5: string | undefined;
      title6: string | undefined;
    },
  ];
};

export type ZabiegiDataFetch = {
  id: number | string;
  title: string;
  sub_title: string;
  sub2_title: string;
  image1: string;
  firstListName: string;
  opisZabieguName: string;
  opisZabiegu: string;
};

export type Cennik = {
  id: number | string;
  title: string;
  price: string;
};
