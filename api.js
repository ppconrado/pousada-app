cat > api.js << 'EOF';
function getUser() {
  return { is_active: true }; // campo 'status' removido
}
module.exports = getUser;
EOF;
