export default function Home() {
  const event = ({ action, category, label, value }: any) => {
    (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <button
        onClick={() => {
          event({
            action: "add_to_cart",
            category: "ecommerce",
            label: "Item added to cart",
            value: "Tesla",
          });
        }}
      >
        Add to cart
      </button>
    </div>
  );
}
