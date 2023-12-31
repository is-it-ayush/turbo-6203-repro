use ts_rs::TS;
use windows::{core::*, Win32::UI::WindowsAndMessaging::*};

#[derive(TS, Debug)]
#[ts(export)]
pub struct ExportMe {
    pub a: i32,
    pub b: i32,
    pub c: String,
}

fn main() {
    unsafe {
        MessageBoxA(None, s!("Ansi"), s!("World"), MB_OK);
        MessageBoxW(None, h!("WinRT"), h!("World"), MB_OK);
    };
}
