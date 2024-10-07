function validasiAkses(role, status) {
  if (status !== "active") {
    return `Akses ditolak: Pengguna ${role} dalam status ${status}`;
  }

  switch (role) {
    case "admin":
      return "Akses diizinkan: Admin memiliki semua akses.";
    case "user":
      return "Akses diizinkan: User memiliki akses terbatas.";
    case "guest":
      return "Akses ditolak: Guest tidak memiliki akses.";
  }
}

console.log(validasiAkses("admin", "active"));
console.log(validasiAkses("user", "inactive"));
console.log(validasiAkses("guest", "active"));
