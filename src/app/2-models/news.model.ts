class NewsModel {
  public nUrl: number;
  public nTitle: string;
  public nShortDesc: string;
  public nLongDesc: string[];
  public nImageSrc: string;
  public nGeneralLogos: boolean;
  public nDate: string;
  public nReadMore: boolean;
  public nLink?: { link: string; text: string[] | null }[];
  public nPicTitle?: string;
}

export default NewsModel;
