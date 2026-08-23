import { useMemo, useState } from "react";

import CarCard from "../../components/fleet/CarCard/CarCard";
import { cars } from "../../data/cars";
import styles from "./Fleet.module.css";

type CategoryFilter = "All" | "Economy" | "Compact" | "SUV";

function Fleet() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryFilter>("All");

  const filteredCars = useMemo(() => {
    if (selectedCategory === "All") {
      return cars;
    }

    return cars.filter(
      (car) => car.category === selectedCategory
    );
  }, [selectedCategory]);

  const categories: CategoryFilter[] = [
    "All",
    "Economy",
    "Compact",
    "SUV",
  ];

  return (
    <section className={styles.page}>
      <div className="container">
        <header className={styles.header}>
          <span className={styles.eyebrow}>
            Our fleet
          </span>

          <h1>
            Find the right car for your journey.
          </h1>

          <p>
            Browse our range of reliable rental cars and choose
            the option that best fits your trip around Crete.
          </p>
        </header>

        <div className={styles.toolbar}>
          <div>
            <span className={styles.filterLabel}>
              Vehicle category
            </span>

            <div
              className={styles.filters}
              aria-label="Filter cars by category"
            >
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={`${styles.filterButton} ${
                    selectedCategory === category
                      ? styles.filterButtonActive
                      : ""
                  }`}
                  onClick={() =>
                    setSelectedCategory(category)
                  }
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <p className={styles.resultCount}>
            Showing <strong>{filteredCars.length}</strong>{" "}
            {filteredCars.length === 1
              ? "vehicle"
              : "vehicles"}
          </p>
        </div>

        {filteredCars.length > 0 ? (
          <div className={styles.grid}>
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
              />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h2>No cars found</h2>
            <p>
              Try selecting another vehicle category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Fleet;