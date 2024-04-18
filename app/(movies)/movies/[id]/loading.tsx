//왜 이 로딩 컴포넌트는 작동이 안되는가?
// 페이지에서 data fetching을 하지 않고, 불로오는 컴포넌트에서 data fetching을 하기 때문에 각각 컴포넌트에서 로딩 처리를 하기 때문
export default function Loading() {
    return <h1>Loading a movie id..</h1>;
}