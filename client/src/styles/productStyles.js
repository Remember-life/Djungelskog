import styled from 'styled-components';

export const ListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  font-size: 12px;
  height: 350px;
  width: 800px;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  padding:4px 0 24px;
`;

//  product wrapped in anchor tag for clickable link,
// remove anchor styling so everythign isnt blue and underlined
export const ProductAnchorWrapper = styled.a`
  text-decoration: none;
  color: inherit;
  &:hover{
    text-decoration: none;
    color: inherit;
  }
  &:focus {
    text-decoration: none;
    color: inherit;
  }
  &:active {
    text-decoration: none;
    color: inherit;
  }
`;

export const ProductWrapper = styled.div`

  width: 175px;
  padding: 5px;
  display:inline-block;
  cursor: pointer;
`;

export const ProductImage = styled.img`
  width:100%;
`;

export const ProductTitle = styled.div`
  font-faimly: Noto Sans;
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  color: #000;
  margin-bottom: 5px;
  text-decoration: ${(props) => (props.hovering ? 'underline' : 'none')};

`;

export const ProductDescription = styled.div`
  font-family: sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  color: #484848;
  margin-bottom: 5px;
`;

export const ProductPrice = styled.div`
  display: inline;
  font-family: 'Noto Sans';
  font-weight: 700;
  color: #000;
  font-size: 22px;
  &:before {
    content: "$";
    font-size: 12px;
    vertical-align:40%;
  }
`;

export const StarIcon = styled.path.attrs({
  d: 'M12.003 4L14.8623 8.9091L20.4147 10.1115L16.6294 14.3478L17.2017 20L12.003 17.7091L6.80429 20L7.37657 14.3478L3.59131 10.1115L9.14371 8.9091L12.003 4Z',
})`
  fill: ${(props) => (props.filled ? '#000' : '#DFDFDF')};
`;

export const HalfEmptyStarIcon = styled.path.attrs({
  d: 'M17.1986 20L11.9999 17.7091V4L14.8592 8.9091L20.4116 10.1115L16.6264 14.3478L17.1986 20Z',
})`
  fill: #DFDFDF;
`;
export const HalfFilledStarIcon = styled.path.attrs({
  d: 'M6.80136 20L12.0001 17.7091V4L9.14078 8.9091L3.58838 10.1115L7.37364 14.3478L6.80136 20Z',
})`
  fill: #000;
`;

export const Stars = styled.div`
  cursor: pointer;
  display: flex;
  height: 25px;
  width: 100px;
`;

export const ProductRatingCount = styled.div`
  font-family: sans-serif;
  letter-spacing: 0;
  font-weight: 400;
  font-size: 12px;
  color: #484848;
  padding-top: 5px;
  &:hover {
    text-decoration:underline;
  }
`;

export const HeartWrapper = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  height: 30px;
  width: 20%;
  float: right;
`;

export const HeartIcon = styled.path.attrs({
  d: 'M12.336 5.52055C14.2336 3.62376 17.3096 3.62401 19.2069 5.52129C20.2067 6.52115 20.6796 7.85005 20.6259 9.15761C20.6151 12.2138 18.4184 14.8654 16.4892 16.6366C15.4926 17.5517 14.5004 18.2923 13.7593 18.8036C13.3879 19.0598 13.0771 19.2601 12.8574 19.3973C12.7475 19.466 12.6601 19.519 12.5992 19.5555C12.5687 19.5737 12.5448 19.5879 12.5279 19.5978L12.5079 19.6094L12.502 19.6129L12.5001 19.614C12.5001 19.614 12.4989 19.6147 11.9999 18.748C11.501 19.6147 11.5005 19.6144 11.5005 19.6144L11.4979 19.6129L11.4919 19.6094L11.472 19.5978C11.4551 19.5879 11.4312 19.5737 11.4007 19.5555C11.3397 19.519 11.2524 19.466 11.1425 19.3973C10.9227 19.2601 10.612 19.0598 10.2405 18.8036C9.49947 18.2923 8.50726 17.5517 7.51063 16.6366C5.58146 14.8654 3.38477 12.2139 3.37399 9.15765C3.32024 7.85008 3.79314 6.52117 4.79301 5.52129C6.69054 3.62376 9.76704 3.62376 11.6646 5.52129L11.9993 5.856L12.3353 5.52129L12.336 5.52055ZM11.9999 18.748L11.5005 19.6144L11.9999 19.9019L12.4989 19.6147L11.9999 18.748ZM11.9999 17.573C12.1727 17.462 12.384 17.3226 12.6236 17.1573C13.3125 16.6821 14.2267 15.9988 15.1366 15.1634C17.0157 13.4381 18.6259 11.2919 18.6259 9.13506V9.11213L18.627 9.08922C18.6626 8.31221 18.3844 7.52727 17.7926 6.9355C16.6762 5.81903 14.866 5.81902 13.7495 6.9355L13.7481 6.93689L11.9965 8.68166L10.2504 6.9355C9.13387 5.81903 7.3237 5.81903 6.20722 6.9355C5.61546 7.52727 5.33724 8.31221 5.3729 9.08922L5.37395 9.11213V9.13507C5.37395 11.2919 6.98418 13.4381 8.86325 15.1634C9.77312 15.9988 10.6874 16.6821 11.3762 17.1573C11.6159 17.3226 11.8271 17.462 11.9999 17.573Z',
})`
  position: absolute;
  fill: ${(props) => (props.hovering ? 'rgb(118, 118, 118)' : 'rgb(255,255,255)')};
  &:hover {
    fill: rgb(59, 59, 59)
  }
`;

export const BasketIcon = styled.path.attrs({
  d: 'M10.4372 4H10.9993H12.0003H12.9996H13.5616L13.8538 4.48014L17.2112 9.99713H21H22.2806L21.9702 11.2396L21.5303 13H19.4688L19.7194 11.9971H4.28079L5.59143 17.2397C5.70272 17.6848 6.1027 17.9971 6.56157 17.9971H15V19.9971H6.56157C5.18496 19.9971 3.98502 19.0602 3.65114 17.7247L2.02987 11.2397L1.71924 9.99713H3.00002H6.78793L10.145 4.48017L10.4372 4ZM12.4375 6L14.87 9.99713H9.12911L11.5614 6H12.0003H12.4375ZM17.9961 16V14H19.9961V16H21.9961V18H19.9961V20H17.9961V18H15.9961V16H17.9961Z',
})`
fill: rgb(255,255,255);
`;

export const BasketWrapper = styled.path`
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 25px;
  width: 25px;
  position: relative;
  margin: auto;

`;
export const BasketOuterWrapper = styled.path`
  display:inline;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  height: 40px;
  width: 40px;
  float: right;
  background-color: ${(props) => (props.hovering ? 'rgb(0,88,163)' : 'rgb(255,255,255)')}
`;
