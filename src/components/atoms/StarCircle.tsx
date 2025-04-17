export default function StarCircle({ color, className } : { color: string, className?: string }) {

    return (
        <svg className={'star-circle w-20 lg:w-30 ' + className}  viewBox="0 0 145 145" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M72.5 0L73.7438 43.9863C74.1604 58.8743 86.1317 70.8264 101.014 71.2562L145 72.5L101.014 73.7438C86.1256 74.1604 74.1736 86.1317 73.7438 101.014L72.5 145L71.2562 101.014C70.8396 86.1256 58.8683 74.1736 43.9863 73.7438L0 72.5L43.9863 71.2562C58.8743 70.8396 70.8264 58.8683 71.2562 43.9863L72.5 0Z" fill={color} />
            <path d="M72.4999 119.658C46.4861 119.658 25.3296 98.501 25.3296 72.4999C25.3296 46.5052 46.4861 25.3296 72.4999 25.3296C98.5138 25.3296 119.67 46.4861 119.67 72.4999C119.67 98.5138 98.5138 119.658 72.4999 119.658ZM72.4999 26.573C47.1707 26.573 26.5666 47.1755 26.5666 72.5063C26.5666 97.8355 47.1691 118.421 72.4999 118.421C97.8308 118.421 118.433 97.818 118.433 72.5063C118.433 47.1962 97.8308 26.573 72.4999 26.573Z" fill={color} />
        </svg>
    )
}