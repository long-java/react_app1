import { Box, Container, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import routes from "./router";

function App() {
  const [mode, setMode] = useState('light');
  const darkTheme = createTheme ({
    palette: {
      mode: mode
    }
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path}
            element={
              <route.component
                mode={mode} // Props bổ sung
                setMode={setMode} // Props bổ sung
              />
            }
          />
        ))}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
