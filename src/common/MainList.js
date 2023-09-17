import Card from './Card';

export default function MainList() {
    
    return (
        <>
        <div className="main_list mw">
            <h2>메인 리스트</h2>
            <a href="#">View all</a>
            <ul className="__list">
                <Card />
            </ul>    
        </div>
        </>
    )
}