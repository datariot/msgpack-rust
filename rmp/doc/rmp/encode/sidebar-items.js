initSidebarItems({"enum":[["ValueWriteError","Represents an error that can occur when attempring to write MessagePack'ed complex value into the write."]],"fn":[["write_array_len","Encodes and attempts to write the most efficient array length implementation to the given write, returning the marker used."],["write_bin","Encodes and attempts to write the most efficient binary implementation to the given `Write`."],["write_bin_len","Encodes and attempts to write the most efficient binary array length implementation to the given write, returning the marker used."],["write_bool","Encodes and attempts to write a bool value into the given write."],["write_ext_meta","Encodes and attempts to write the most efficient ext metadata implementation to the given write, returning the marker used."],["write_f32","Encodes and attempts to write an `f32` value as a 5-byte sequence into the given write."],["write_f64","Encodes and attempts to write an `f64` value as a 9-byte sequence into the given write."],["write_i16","Encodes and attempts to write an `i16` value as a 3-byte sequence into the given write."],["write_i32","Encodes and attempts to write an `i32` value as a 5-byte sequence into the given write."],["write_i64","Encodes and attempts to write an `i64` value as a 9-byte sequence into the given write."],["write_i8","Encodes and attempts to write an `i8` value as a 2-byte sequence into the given write."],["write_map_len","Encodes and attempts to write the most efficient map length implementation to the given write, returning the marker used."],["write_nfix","Encodes and attempts to write a negative small integer value as a negative fixnum into the given write."],["write_nil","Encodes and attempts to write a nil value into the given write."],["write_pfix","Encodes and attempts to write an unsigned small integer value as a positive fixint into the given write."],["write_sint","Encodes and attempts to write an `i64` value into the given write using the most efficient representation, returning the marker used."],["write_sint_eff","Encodes and attempts to write an `i64` value using the most effective representation."],["write_str","Encodes and attempts to write the most efficient string implementation to the given `Write`."],["write_str_len","Encodes and attempts to write the most efficient string length implementation to the given write, returning the marker used."],["write_u16","Encodes and attempts to write an `u16` value strictly as a 3-byte sequence into the given write."],["write_u32","Encodes and attempts to write an `u32` value strictly as a 5-byte sequence into the given write."],["write_u64","Encodes and attempts to write an `u64` value strictly as a 9-byte sequence into the given write."],["write_u8","Encodes and attempts to write an `u8` value as a 2-byte sequence into the given write."],["write_uint","Encodes and attempts to write an `u64` value into the given write using the most efficient representation, returning the marker used."]],"mod":[["value",""],["value_ref","This module is UNSTABLE, the reason is - recently added."]],"struct":[["FixedValueWriteError","Represents an error that can occur when attempting to write MessagePack'ed single-byte value."],["MarkerWriteError","Represents an error that can occur when attempting to write marker into the write."],["WriteError","Represents an error that can occur when attempting to write MessagePack'ed value into the write."]]});