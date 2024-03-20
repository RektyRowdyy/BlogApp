import "./Content.css"

function Content() {
    return (
        <>
            <div className="post">
                <div className="image">
                    <img src="https://i.kym-cdn.com/entries/icons/facebook/000/048/513/Ebichu_crying_cover.jpg" alt="Crying Hamster" />
                </div>
                <div className="text">
                    <h2>Text Title</h2>
                    <p className="info">
                        <a className="author">Dawid Paszko</a>
                        <time>2024-03-18 16:38</time>
                    </p>
                    <p className="summary">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                    </p>
                </div>

            </div>
        </>
    )
}

export default Content