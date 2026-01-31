
export function ContactManager({ content }: { content: unknown }) {
    return (
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
            <span
                className="
                [&_a]:text-blue-600 
                [&_a]:font-semibold 
                [&_a]:underline 
                [&_a]:underline-offset-4 
                hover:[&_a]:text-blue-500 
                dark:[&_a]:text-blue-400
                transition-colors
            "
                dangerouslySetInnerHTML={{ __html: content as TrustedHTML }} />
        </p>
    );
}