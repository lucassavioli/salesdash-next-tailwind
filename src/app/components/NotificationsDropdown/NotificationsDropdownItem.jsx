export default function NotificationsItem({ time, title, description }) {
  return (
    <a
      role="menuitem"
      href="#"
      className="group block gap-1.5 px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 hover:text-neutral-950"
    >
      <div className="text-xs text-neutral-600">{time}</div>
      <h5 className="mb-0.5 font-semibold">
        <span className="text-indigo-500">•</span>
        {title}
      </h5>
      <p className="text-xs text-neutral-500">{description}</p>
    </a>
  );
}
