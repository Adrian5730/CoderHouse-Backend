import pyautogui
import keyboard
import time
import win32api
import win32con

# from scrypt import click

# pyautogui.displayMousePosition()
# Le para abrir el mapa general 
# X: 1197 Y:  108 RGB: (182, 167, 156)

# Darle al general
# X:   99 Y:   31 RGB: (212, 212, 213)




# X: 1771 Y:  114 RGB: ( 95,  88,  77)
# X: 1023 Y:   64 RGB: ( 36,  42,  55)
# X: 1613 Y:  608 RGB: (167, 171, 233)


def click(x, y):
    win32api.SetCursorPos((x, y))
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTDOWN, 0, 0)
    time.sleep(0.01)
    win32api.mouse_event(win32con.MOUSEEVENTF_LEFTUP, 0, 0)

def recolectarEnergia():
        print('entro')
        time.sleep(5)
        click(1771, 114)
        time.sleep(5)
        click(1023, 64)





while 1:
    if keyboard.is_pressed('e'):
        while 1:
            recolectarEnergia()

