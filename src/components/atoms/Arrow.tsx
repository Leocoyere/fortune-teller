export default function Arrow({ className } : { className?: string }) {
    return (
        <svg className={className + " cursor-pointer"} width="46" height="16" viewBox="0 0 46 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M34.9977 15.7082C35.6565 14.3027 36.2934 13.0729 36.9083 12.0188C37.5671 10.9647 38.2039 10.0863 38.8188 9.38358H0.410156V6.61658H38.8188C38.2039 5.86993 37.5671 4.96955 36.9083 3.91545C36.2934 2.86135 35.6565 1.65353 34.9977 0.291992H37.3036C40.0706 3.49821 42.9693 5.86993 45.9999 7.40715V8.59301C42.9693 10.0863 40.0706 12.458 37.3036 15.7082H34.9977Z" fill="white"/>
        </svg>
    )
}