import { Search } from "lucide-react";
import styles from "./Searchbar.module.css";
import clsx from "clsx";
export const Searchbar = ({ className, ...rest }) => {
  return (
    <form {...rest} class={clsx(styles.searchForm, className)}>
      <input placeholder="What are you looking for?" type="search" />
      <Search size={18} />
    </form>
  );
};
