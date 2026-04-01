export function AdminFooter() {
  return (
    <footer className="border-t px-6 py-4">
      <p className="text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Admin Panel. All rights reserved.
      </p>
    </footer>
  );
}
