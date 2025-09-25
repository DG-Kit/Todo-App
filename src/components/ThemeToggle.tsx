import { Box } from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ThemeToggle = ({ mode, onToggle }: { mode: 'light' | 'dark', onToggle: () => void }) => {
  return (
    <Box sx={{ position: 'fixed', top: 12, left: 12, zIndex: 1000 }}>
      {/* Nút gạt chữ nhật */}
      <div onClick={onToggle}
        style={{
          width: 64,
          height: 32,
          borderRadius: 9999,
          background: mode === 'dark' ? '#111827' : '#e5e7eb',
          display: 'flex',
          alignItems: 'center',
          padding: 4,
          cursor: 'pointer',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
        }}>
        <div style={{
          width: 24,
          height: 24,
          borderRadius: 9999,
          background: mode === 'dark' ? '#374151' : '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transform: mode === 'dark' ? 'translateX(32px)' : 'translateX(0)',
          transition: 'transform 200ms ease'
        }}>
          {mode === 'dark' ? (
            <Brightness4Icon fontSize="small" htmlColor="#fef3c7" />
          ) : (
            <Brightness7Icon fontSize="small" htmlColor="#f59e0b" />
          )}
        </div>
      </div>
    </Box>
  );
}



