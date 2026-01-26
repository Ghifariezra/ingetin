// Update SVG - hapus className dari props
export function FlagID(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" className={props.className} {...props}>
            <path d="M0 0h24v12H0z" fill="#D80027" />
            <path d="M0 12h24v12H0z" fill="#F0F0F0" />
        </svg>
    )
}

export function FlagUS(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" className={props.className} {...props}>
            <path fill="#F0F0F0" d="M0 0h24v24H0z" />
            <path fill="#D80027" d="M0 0h24v2.5H0zm0 5h24v2.5H0zm0 5h24v2.5H0zm0 5h24v2.5H0zm0 5h24v2.5H0zm0 5h24v2.5H0z" />
            <path fill="#0052B4" d="M0 0h11v12.5H0z" />
            <g fill="#FFF">
                <circle cx="2" cy="2" r="0.5" /><circle cx="5.5" cy="2" r="0.5" /><circle cx="9" cy="2" r="0.5" />
                <circle cx="3.75" cy="4" r="0.5" /><circle cx="7.25" cy="4" r="0.5" />
                <circle cx="2" cy="6" r="0.5" /><circle cx="5.5" cy="6" r="0.5" /><circle cx="9" cy="6" r="0.5" />
                <circle cx="3.75" cy="8" r="0.5" /><circle cx="7.25" cy="8" r="0.5" />
                <circle cx="2" cy="10" r="0.5" /><circle cx="5.5" cy="10" r="0.5" /><circle cx="9" cy="10" r="0.5" />
            </g>
        </svg>
    )
}