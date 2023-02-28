export interface zabieg {
  id: string;
  name: string;
  title: string;
  subTitle: string;
  image1: string;
  listTitle: string;
  listItems: ListItem[];
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
  wkazaniaLists: WkazaniaList[];
  image2: string;
}

export interface ListItem {
  id: number;
  itemTitles: string;
}

export interface WkazaniaList {
  id: number;
  wkazaniaTitle: string;
}
