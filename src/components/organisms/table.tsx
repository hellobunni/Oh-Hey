"use client";

import {
  createContext,
  useContext,
  type ComponentPropsWithoutRef,
  type ReactNode,
  type TdHTMLAttributes,
  type ThHTMLAttributes,
} from "react";

import { cn } from "@/lib/utils";

type Density = "default" | "compact";

type TableContextValue = {
  density: Density;
};

const TableContext = createContext<TableContextValue>({ density: "default" });

type TableProps = ComponentPropsWithoutRef<"table"> & {
  density?: Density;
  children: ReactNode;
};

/**
 * Table — data grid with zebra rows, muted uppercase headers, Badge-friendly cells.
 * Density: default 14×18 / compact 8×14.
 */
function Table({
  density = "default",
  className,
  children,
  ...props
}: TableProps) {
  return (
    <TableContext.Provider value={{ density }}>
      <div className="w-full overflow-x-auto">
        <table
          className={cn("w-full border-collapse text-left", className)}
          {...props}
        >
          {children}
        </table>
      </div>
    </TableContext.Provider>
  );
}

function TableHeader({
  className,
  ...props
}: ComponentPropsWithoutRef<"thead">) {
  return <thead className={cn(className)} {...props} />;
}

function TableBody({ className, ...props }: ComponentPropsWithoutRef<"tbody">) {
  return (
    <tbody
      className={cn(
        // zebra: light = 3% black, dark = 2% white
        "[&>tr:nth-child(even)]:bg-black/[0.03] dark:[&>tr:nth-child(even)]:bg-white/[0.02]",
        className,
      )}
      {...props}
    />
  );
}

type TableRowProps = ComponentPropsWithoutRef<"tr"> & {
  /** Makes the row look/feel clickable */
  interactive?: boolean;
};

function TableRow({ className, interactive, ...props }: TableRowProps) {
  return (
    <tr
      className={cn(
        "transition-colors duration-150 ease",
        interactive &&
          "cursor-pointer hover:bg-black/[0.05] dark:hover:bg-white/[0.04]",
        !interactive && "hover:bg-black/[0.03] dark:hover:bg-white/[0.03]",
        className,
      )}
      {...props}
    />
  );
}

function TableHead({
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) {
  const { density } = useContext(TableContext);
  return (
    <th
      className={cn(
        "font-sans text-[11px] font-bold uppercase tracking-wider text-ink-mute",
        density === "compact" ? "px-3.5 py-2" : "px-[18px] py-3.5",
        className,
      )}
      {...props}
    />
  );
}

function TableCell({
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) {
  const { density } = useContext(TableContext);
  return (
    <td
      className={cn(
        "font-sans text-sm-ink border-t border-line",
        density === "compact" ? "px-3.5 py-2" : "px-[18px] py-3.5",
        className,
      )}
      {...props}
    />
  );
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;
Table.Head = TableHead;
Table.Cell = TableCell;

export { Table };
export type { TableProps, TableRowProps, Density };
