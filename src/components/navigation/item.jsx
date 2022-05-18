const NavigationItem = (props) => {
    return (
        <div className='lg:mr-5 lg:mb-0 mb-5' onClick={props.toggleCloseOpen}>
            <a
                className='hover:text-primary capitalize'
                href={`#${props.slug}`}
            >
                {props.name}
            </a>
        </div>
    )
}

export default NavigationItem
